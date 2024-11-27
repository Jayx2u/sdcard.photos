import React from 'react';
import anime from 'animejs';

const Title = () => {
  React.useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo'
    });

    timeline.add({
      targets: '.title-path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 14000,
      delay: 100,
    });
  }, []);

  return (
    <svg
      className="w-full max-w-[600px] h-auto mb-2"
      viewBox="0 0 307 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="title-path dark:stroke-white stroke-black"
        d="M10.24 30.48C5.92 30.48 2.84 28.88 0.68 26.44L2.84 24.56C4.8 26.64 7.04 27.8 10.32 27.8C13.52 27.8 15.8 26.68 15.8 24.24C15.8 22.08 14.04 21.52 12.16 21.24L8.92 20.76C6 20.32 1.84 19.52 1.84 15.04C1.84 10.92 5.36 8.88 10.16 8.88C13.88 8.88 16.6 10.12 18.56 12.2L16.48 14.16C15.52 13 13.68 11.56 10.04 11.56C6.8 11.56 5 12.72 5 14.84C5 17 6.8 17.56 8.64 17.84L11.88 18.32C14.84 18.76 18.96 19.56 18.96 24.04C18.96 28.12 15.52 30.48 10.24 30.48ZM38.9844 30V26.64H38.8244C37.5044 29.16 35.3444 30.48 32.4644 30.48C27.4244 30.48 24.3844 26.44 24.3844 19.68C24.3844 12.92 27.4244 8.88 32.4644 8.88C35.3444 8.88 37.5044 10.2 38.8244 12.72H38.9844V0.4H42.1844V30H38.9844ZM33.7044 27.64C36.5444 27.64 38.9844 26.16 38.9844 23.4V15.96C38.9844 13.2 36.5444 11.72 33.7044 11.72C29.9844 11.72 27.8244 14.2 27.8244 17.92V21.44C27.8244 25.16 29.9844 27.64 33.7044 27.64ZM58.6888 30.48C52.7688 30.48 49.3288 26.2 49.3288 19.68C49.3288 13.12 52.8088 8.88 58.6488 8.88C62.6488 8.88 65.1288 10.84 66.2888 13.64L63.7288 15C62.9688 12.88 61.2088 11.64 58.6488 11.64C54.8888 11.64 52.7688 14.28 52.7688 17.92V21.44C52.7688 25.08 54.8488 27.72 58.7288 27.72C61.4888 27.72 63.2888 26.36 64.3288 24.12L66.6088 25.68C65.4088 28.44 62.8088 30.48 58.6888 30.48ZM91.9531 30H89.7531C87.2731 30 86.3131 28.56 86.0731 26.64H85.8731C84.9931 29 83.0331 30.48 79.6731 30.48C75.3531 30.48 72.5931 28.08 72.5931 24.2C72.5931 20.4 75.2731 18.2 81.4731 18.2H85.8731V16.16C85.8731 13.16 84.0731 11.6 80.9531 11.6C78.1931 11.6 76.5131 12.76 75.4331 14.64L73.2731 13.04C74.3131 10.88 76.9531 8.88 81.1531 8.88C85.9931 8.88 89.0731 11.48 89.0731 15.84V27.2H91.9531V30ZM80.2331 27.8C83.5131 27.8 85.8731 26.12 85.8731 24V20.6H81.4731C77.6731 20.6 75.9531 21.72 75.9531 23.72V24.56C75.9531 26.68 77.5931 27.8 80.2331 27.8ZM97.0175 30V27.28H103.058V12.08H97.0175V9.36H106.258V14.56H106.458C107.258 11.84 109.098 9.36 113.418 9.36H116.298V12.56H112.418C108.378 12.56 106.258 15.16 106.258 18.36V27.28H114.258V30H97.0175ZM134.922 30V26.64H134.762C133.442 29.16 131.282 30.48 128.402 30.48C123.362 30.48 120.322 26.44 120.322 19.68C120.322 12.92 123.362 8.88 128.402 8.88C131.282 8.88 133.442 10.2 134.762 12.72H134.922V0.4H138.122V30H134.922ZM129.642 27.64C132.482 27.64 134.922 26.16 134.922 23.4V15.96C134.922 13.2 132.482 11.72 129.642 11.72C125.922 11.72 123.762 14.2 123.762 17.92V21.44C123.762 25.16 125.922 27.64 129.642 27.64ZM153.906 30.36C151.746 30.36 150.946 29.32 150.946 27.96V27.24C150.946 25.88 151.746 24.84 153.906 24.84C156.066 24.84 156.866 25.88 156.866 27.24V27.96C156.866 29.32 156.066 30.36 153.906 30.36ZM169.691 38V9.36H172.891V12.72H173.051C174.371 10.2 176.531 8.88 179.411 8.88C184.451 8.88 187.491 12.92 187.491 19.68C187.491 26.44 184.451 30.48 179.411 30.48C176.531 30.48 174.371 29.16 173.051 26.64H172.891V38H169.691ZM178.171 27.64C181.891 27.64 184.051 25.16 184.051 21.44V17.92C184.051 14.2 181.891 11.72 178.171 11.72C175.331 11.72 172.891 13.2 172.891 15.96V23.4C172.891 26.16 175.331 27.64 178.171 27.64ZM193.795 30V0.4H196.995V12.72H197.155C198.035 10.68 199.635 8.88 203.035 8.88C207.355 8.88 210.195 11.76 210.195 16.76V30H206.995V17.32C206.995 13.56 205.275 11.72 202.115 11.72C199.555 11.72 196.995 12.96 196.995 15.68V30H193.795ZM225.859 30.48C220.059 30.48 216.499 26.24 216.499 19.68C216.499 13.12 220.059 8.88 225.859 8.88C231.659 8.88 235.219 13.12 235.219 19.68C235.219 26.24 231.659 30.48 225.859 30.48ZM225.859 27.72C229.419 27.72 231.819 25.6 231.819 21.16V18.2C231.819 13.76 229.419 11.64 225.859 11.64C222.299 11.64 219.899 13.76 219.899 18.2V21.16C219.899 25.6 222.299 27.72 225.859 27.72ZM258.884 30H250.844C247.724 30 246.284 28.04 246.284 25.28V12.08H239.404V9.36H244.524C245.884 9.36 246.404 8.88 246.404 7.48V2.08H249.484V9.36H258.884V12.08H249.484V27.28H258.884V30ZM273.828 30.48C268.028 30.48 264.468 26.24 264.468 19.68C264.468 13.12 268.028 8.88 273.828 8.88C279.628 8.88 283.188 13.12 283.188 19.68C283.188 26.24 279.628 30.48 273.828 30.48ZM273.828 27.72C277.388 27.72 279.788 25.6 279.788 21.16V18.2C279.788 13.76 277.388 11.64 273.828 11.64C270.268 11.64 267.868 13.76 267.868 18.2V21.16C267.868 25.6 270.268 27.72 273.828 27.72ZM298.053 30.48C293.733 30.48 290.653 28.88 288.493 26.44L290.653 24.56C292.613 26.64 294.853 27.8 298.133 27.8C301.333 27.8 303.613 26.68 303.613 24.24C303.613 22.08 301.853 21.52 299.973 21.24L296.733 20.76C293.813 20.32 289.653 19.52 289.653 15.04C289.653 10.92 293.173 8.88 297.973 8.88C301.693 8.88 304.413 10.12 306.372 12.2L304.293 14.16C303.333 13 301.493 11.56 297.853 11.56C294.613 11.56 292.813 12.72 292.813 14.84C292.813 17 294.613 17.56 296.453 17.84L299.693 18.32C302.653 18.76 306.773 19.56 306.773 24.04C306.773 28.12 303.333 30.48 298.053 30.48Z"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};

export default Title;