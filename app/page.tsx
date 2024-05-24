import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import AddTask from "./Components/AddTask/AddTask";
import Summary from "./Components/Summary/Summary";
import Empty from "./Components/Empty/Empty";
import Task from "./Components/Task/Task";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <AddTask />
        <Summary />
        <Empty />
        <Task done = {true}/>
        <Task/>
        <Task done = {true}/>
        <Task/>
      </div>
    </div>
  )
} 