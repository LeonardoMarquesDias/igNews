import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Contrary to popular belief, Lorem Ipsum is not simply random text.</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Contrary to popular belief, Lorem Ipsum is not simply random text.</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Contrary to popular belief, Lorem Ipsum is not simply random text.</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </a>
        </div>
      </main>
    </>
  );
}