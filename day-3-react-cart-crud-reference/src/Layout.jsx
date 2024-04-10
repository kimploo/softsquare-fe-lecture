import s from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={s.mainContainer}>
      <div className={s.pageContainer}>{children}</div>
    </main>
  );
}
