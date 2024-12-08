import { FC, useEffect, useRef } from "react";
import { Button, FormInput } from "../../index";
import { Style } from "../../Button/Button";
import { schemaEditWord } from "../../../schemas/shemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { editWord } from "../../../redux/words/wordsOperations";
import { IWordsResult } from "../../../redux/words/types";
import * as selector from "../../../redux/words/wordsSelectors";
import { toast } from "react-toastify";

type EditModalProps = {
  setIsVisibleEditWordModal: (props: boolean) => void;
  result: IWordsResult;
};

export type EditWordValues = {
  en: string;
  ua: string;
};

export const EditWordModal: FC<EditModalProps> = ({
  setIsVisibleEditWordModal,
  result,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const notification = useSelector(selector.selectNotification);
  const isFirstRender = useRef(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditWordValues>({
    resolver: yupResolver(schemaEditWord),
    mode: "onSubmit",
    defaultValues: {
      en: result.en,
      ua: result.ua,
    },
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (notification === "") return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    } else toast.success(notification);
  }, [notification]);

  const onSubmit: SubmitHandler<EditWordValues> = (data) => {
    console.log(data);
    dispatch(
      editWord({
        id: result._id,
        en: data.en,
        ua: data.ua,
        category: result.category,
        isIrregular: result.isIrregular,
      })
    );
    reset();
    setIsVisibleEditWordModal(false);
  };

  return (
    <div className="w-full mobileAdaptive:w-[343px] tablet:w-[628px] rounded-lg bg-dark-green-color px-4 pt-12 pb-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <img src="../../../../public/ukraine.svg" alt="" />
            <p className="text-mediumSmall text-primary-white-color">
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
            <p className="text-mediumSmall text-primary-white-color">English</p>
          </div>
          <FormInput
            error={errors.en}
            label="en"
            register={register}
            style={Style.Light}
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit" text="Save" style={Style.Dark} />
          <Button
            type="button"
            text="Cancel"
            style={Style.Dark}
            onClick={() => setIsVisibleEditWordModal(false)}
          />
        </div>
      </form>
    </div>
  );
};
