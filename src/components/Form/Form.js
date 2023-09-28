import './Form.css';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Form() {

  const { values, handleChange, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
        <form onSubmit={handleSubmit} className="form__container">
          <label for="email" className="form__label">Email address
            <input
              type="email"
              className={`form__item ${
                isValid ? "" : "form__item_inactive"
              }`}
              id="email"
              name="email"
              placeholder="email@company.com"
              required
              value={values.email || ""}
              onChange={handleChange}
            />
            <span
              className={`form__item-error ${
                isValid ? "" : "form__item-error_active"
              }`}
            >
              Valid email required
            </span>
          </label>
          <button
              type="submit"
              disabled={!isValid}
              className={`form__button ${
                isValid ? "" : "form__button_inactive"
              }`}
            >Subscribe to monthly newsletter
            </button>
        </form>      
    </section>
  );
}

export default Form;