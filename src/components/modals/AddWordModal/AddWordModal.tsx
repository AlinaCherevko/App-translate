import { FC } from "react";
import { Button, FormInput, RadioGroupEl, SelectEl } from "../../index";
import { Style } from "../../Button/Button";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { schemaAddWord } from "../../../schemas/shemas";
import { WordCategory } from "../../../redux/words/types";
import * as selector from "../../../redux/words/wordsSelectors";
import { CreateOptionsArray } from "../../../utils/utils";
import { createNewWord } from "../../../redux/words/wordsOperations";

type AddWordProps = {
  setIsVisibleAddWordModal: (value: boolean) => void;
};
type AddWordValues = {
  en: string;
  ua: string;
  category: WordCategory;
  isIrregular?: boolean;
};

export const AddWordModal: FC<AddWordProps> = ({
  setIsVisibleAddWordModal,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const categories = useSelector(selector.selectCategories);
  const options = CreateOptionsArray(categories);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    watch,
    reset,
  } = useForm<AddWordValues>({
    resolver: yupResolver(schemaAddWord),
    mode: "onSubmit",
    defaultValues: { isIrregular: false },
  });

  const value = getValues("category");
  console.log(value);

  const type = getValues("isIrregular");
  console.log(type);

  const selectedCategory = watch("category");
  const isIrregular = watch("isIrregular");

  const onSubmit: SubmitHandler<AddWordValues> = (data) => {
    const formData =
      selectedCategory === "verb"
        ? {
            en: data.en,
            ua: data.ua,
            category: selectedCategory,
            isIrregular: isIrregular,
          }
        : {
            en: data.en,
            ua: data.ua,
            category: selectedCategory,
          };

    dispatch(createNewWord(formData));
    reset();
    setIsVisibleAddWordModal(false);
  };

  return (
    <div className=" rounded-lg bg-dark-green-color w-full mobileAdaptive:w-[343px] tablet:w-[628px] px-4 pt-12 pb-12 tablet:px-[64px] tablet:py-[48px]">
      <h2 className=" text-small tablet:text-lightMedium text-primary-white-color font-bold mb-5">
        Add word
      </h2>
      <p className="text-tiny text-primary-white-color mb-8">
        Adding a new word to dictionary is an important step in enriching the
        language base and expanding the vocabulary
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-6">
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <SelectEl
                options={options}
                onChange={field.onChange}
                error={errors.category}
                style={Style.Light}
              />
            )}
          />
          <div className="h-[32px]">
            {selectedCategory === "verb" && (
              <>
                <Controller
                  name="isIrregular"
                  control={control}
                  render={({ field }) => (
                    <RadioGroupEl
                      setIsIrregular={field.onChange}
                      style={Style.Light}
                    />
                  )}
                />
                {isIrregular && (
                  <p className="mt-2 text-primary-white-color text-lightSmall">
                    Such data must be entered in the format: I form-II form-III
                    form
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <img src="../../../../public/ukraine.svg" alt="" />
            <p className="text-mediumSmall text-primary-white-color tablet:text-tiny">
              Ukranian
            </p>
          </div>
          <FormInput
            error={errors.ua}
            label="ua"
            register={register}
            style={Style.Light}
          />
        </div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <img src="../../../../public/united kingdom.svg" alt="" />
            <p className="text-mediumSmall text-primary-white-color tablet:text-tiny">
              English
            </p>
          </div>
          <FormInput
            error={errors.en}
            label="en"
            register={register}
            style={Style.Light}
          />
        </div>
        <div className="flex gap-2">
          <Button text="Add" type="submit" style={Style.Dark} />
          <Button
            text="Cancel"
            type="button"
            style={Style.Dark}
            onClick={() => setIsVisibleAddWordModal(false)}
          />
        </div>
      </form>
    </div>
  );
};
