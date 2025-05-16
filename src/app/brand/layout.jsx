import SubNavigationBar from "./components/SubNavigationbar";
import styles from "./brand.module.css";

export default function Layout({ children }) {
    return (
    <>
      <header className={styles.headerContent}>
        <SubNavigationBar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}