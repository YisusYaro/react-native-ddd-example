import "reflect-metadata";
import { App as Modules } from "./modules/shared/infrastructure/dependency-injection/app";
Modules.getInstance().setDependencyInjectionApp();
import Main from "./views/main";

export default function App() {
  return <Main />;
}
