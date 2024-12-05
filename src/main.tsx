import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./redux/auth/authConfig.ts";
import { UIProvider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UIProvider>
        <App />
      </UIProvider>
      <ToastContainer />
    </PersistGate>
  </Provider>
);
