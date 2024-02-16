import { Container, Text, Button } from '@nextui-org/react';
import Head from 'next/head'
import { PaperDownload } from 'react-iconly';
import LottieAnimation from 'components/LottieAnimation';
import webBuild from 'assets/animations/web-build.json';
import ThemeChanger from 'components/ThemeChanger';

const Index = () => {
  const handleDownloadCV = () => {
    window.open('https://media-exp1.licdn.com/dms/document/C562DAQHRgvyE8Q2SRw/profile-treasury-document-pdf-analyzed/0/1601066472974?e=1654732800&v=beta&t=BVXgy-q9VMyYQbqUF6SfOVoVzAVl1OVMUiKpNRWMq6A');
  }

  const handleContactMe = () => {
    window.open('https://wa.me/6289663656560/?text=Hey There!');
  }

  return (
    <div>
      <Head>
        <title>
          Sopi Septiansyah | Person who can create websites from Indonesia.
        </title>
      </Head>
    <div className="landing">
      <ThemeChanger />
      <Container>
        <LottieAnimation
          className="canvas-building-web"
          source={webBuild}
          loop={true}
          animateOnScroll={false}
          autoplay={true}
          duration={1000}
        />
        <div className="content-wrapper">
          <Text
            h1
            size={80}
            css={{
              textGradient: '45deg, #74ebd5 -10%, #ACB6E5 60%'
            }}
            weight="bold"
          >
            Hey there!
          </Text>
          <Text
            h2
            size={80}
            css={{
              textGradient: '45deg, $red600 -10%, $yellow700 60%'
            }}
            weight="bolderrrrrrr"
          >
            I&apos;m Sopi Septiansyah,
          </Text>
          <Text
            h3
            size={80}
            css={{
              textGradient: '45deg, #4e54c8 -10%, #8f94fb 60%'
            }}
            weight="bolder"
          >
            Web Developer
          </Text>
          <Text
            size={36}
            weight="bold"
            css={{
              marginBottom: 25
            }}
          >
            Person who can create websites <br />
            from Indonesia
          </Text>
          <div className="cta-wrapper">
            <Button
              size={'xl'}
              color="primary"
              shadow
              ghost
              iconRight={<PaperDownload />}
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
            <Button size={'xl'} color="primary" shadow onClick={handleContactMe}>
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </div>

    </div>
  );
};

export default Index;
