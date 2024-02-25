import { createSignal, createEffect } from "solid-js";
import './Snackbar.css';

const Snackbar = (props) => {
  const [isOpen, setIsOpen] = createSignal(props.open);

  createEffect(() => {
    setIsOpen(props.open);
    if (isOpen()) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        props.closeSnackbar();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [props.open]);

  return (
    <div
      class={`snackbar${isOpen() ? " show" : ""}`}
      style={{ animationDuration: isOpen() ? "0.5s" : "0s" }}
    >
      <span class="snackbar-text">{props.message}</span>
    </div>
  );
};

export default Snackbar;
