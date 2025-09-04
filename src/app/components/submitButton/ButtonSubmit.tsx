import styles from "../../styles/component-styles/submitButton/submitButton.module.css"

export function SubmitButton(){
        return(
            <button type="submit" className={styles.formInputs} suppressHydrationWarning={true}>submit</button>
        )
}