import styles from './Button.module.css'

function Button() {

    const Inlinestyle = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <>
            <button className={styles.button}>Click me</button>
            <button style={Inlinestyle}>Click me</button>
        </>
    );
}
export default Button