import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.estadao.com.br/resizer/v2/O7AKBOHQZFCLZOBCOXAOOVWTAA.jpg?quality=80&auth=26068fea228f48f69c8e6b22986c4e29376ac723edcbb16b2b3b650c291242f3&width=380">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
