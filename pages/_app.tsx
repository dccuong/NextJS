import '../styles/global.scss'
import { AppPropsWithLayout } from '../models/layouts'
import Layout from '../components/layout';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? Layout;

  return (<LayoutWapper> <Component {...pageProps} /></LayoutWapper>)
}

export default MyApp
