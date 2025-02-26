export const Experience = () => {
  return (
    <>
      <AboutMeSectionStyled id="experience">
        <HeadshotContainer>
          <Headshot src={headshot} alt="Tracy Mortara Headshot" />
          <HeadshotBorder />
          <HeadshotBorderTwo />
        </HeadshotContainer>
        <AboutTextContainer>
          <AboutHeading>
            Hi, I am <span>Tracy Mortara</span> !
          </AboutHeading>
          <p>
            <Title>Junior Front End Developer</Title> with nearly two years of
            experience in React, JavaScript, and modern UI frameworks.
            Passionate about delivering intuitive user experiences, optimizing
            performance, and solving complex front-end challenges.
          </p>
        </AboutTextContainer>
      </AboutMeSectionStyled>
    </>
  );
};
