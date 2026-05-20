import { Container } from '@components/Container/Container';
import { AnimateInView } from '@components/Animate/AnimateInView';

export const Intro = () => (
  <Container pt={6} pb={7}>
    <h1 className="sr-only">
      Stanford Web Services homepage
    </h1>
    <AnimateInView as="p" className="mb-0 max-w-1000 mx-auto font-serif fluid-type-4 leading-snug text-primary">
      We build digital experiences worthy of the work behind them — for every team, every scale, every vision.
    </AnimateInView>
  </Container>
);
