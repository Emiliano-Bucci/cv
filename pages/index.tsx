import { css } from "@emotion/react";
import { LazyImg } from "components/LazyImg";
import React from "react";
import HTML from "public/cv/html5.svg?sprite";
import CSS from "public/cv/css3.svg?sprite";
import JS from "public/cv/javascript.svg?sprite";
import TS from "public/cv/typescript.svg?sprite";
import REACT from "public/cv/react.svg?sprite";
import NEXTJS from "public/cv/nextjs.svg?sprite";
import JEST from "public/cv/jest.svg?sprite";
import APOLLO from "public/cv/apollo.svg?sprite";
import ESLINT from "public/cv/eslint.svg?sprite";
import VERCEL from "public/cv/vercel.svg?sprite";
import VSCODE from "public/cv/vscode.svg?sprite";
import GIT from "public/cv/git.svg?sprite";
import GITHUB from "public/cv/github.svg?sprite";
import CY from "public/cv/cypress.svg?sprite";
import REACTSPRING from "public/cv/reactspring.svg?sprite";
import JIRA from "public/cv/jira.svg?sprite";
import NPM from "public/cv/npm.svg?sprite";
import NODEJS from "public/cv/nodejs.svg?sprite";
import STORYBOOK from "public/cv/storybook.svg?sprite";
import MYVIDEO from "public/cv/myvideo.svg?sprite";
import MYN from "public/cv/myn.svg?sprite";
import AWS from "public/cv/aws.svg?sprite";
import WILDTREK from "public/cv/wildtrek.svg?sprite";
import BURGEZ from "public/cv/burgez.svg?sprite";
import TALENTGARDEN from "public/cv/talentgarden.svg?sprite";
import REACTSPRINGCAROUSEL from "public/cv/carousel.svg?sprite";
import ARGENTINAFLAG from "public/cv/argentinaflag.svg?sprite";
import ITALYFLAG from "public/cv/italyflag.svg?sprite";
import ENGLISHFLAG from "public/cv/englishflag.svg?sprite";
import { DefaultLink } from "components/DefaultLink";

const List: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul
      css={css`
        margin-top: 0.8rem;
        list-style: initial;
        padding-left: 2rem;
      `}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const Contact: React.FC<{
  title: string;
  content: React.ReactNode;
}> = ({ title, content }) => {
  return (
    <div
      css={css`
        display: grid;
      `}
    >
      <span
        css={css`
          font-size: 1.4rem;
          font-weight: 600;
          color: #102a43;
        `}
      >
        {title}
      </span>
      <span
        css={css`
          color: #035388;
        `}
      >
        {content}
      </span>
    </div>
  );
};

const Skill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        background-color: #f0f4f8;
        border-radius: 8px;
        padding: 1.6rem;
        border: 1px solid #b3ecff;
      `}
    >
      {children}
    </div>
  );
};

const WorkExperience: React.FC<{
  title: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: React.ReactNode;
}> = ({ title, logo, startDate, endDate, description }) => {
  const Icon = logo;

  return (
    <div
      css={css`
        background-color: #f0f4f8;
        border-radius: 8px;
        padding: 1.6rem;
        border: 1px solid #b3ecff;

        a {
          display: block;
          text-decoration: underline;
          color: #035388;

          :first-of-type {
            margin-top: 0.8rem;
          }
          :last-of-type {
            margin-bottom: 0.8rem;
          }
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: flex-start;

          @media all and (max-width: 480px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            flex-shrink: 0;
            margin-right: 1.6rem;

            @media all and (max-width: 480px) {
              margin: 0;
              margin-bottom: 1.6rem;
            }
          `}
        >
          <Icon
            css={css`
              width: 48px;
              height: 48px;
            `}
          />
        </div>
        <div
          css={css`
            display: grid;
          `}
        >
          <span
            css={css`
              font-weight: 600;
              font-size: 1.8rem;
            `}
          >
            {title}
          </span>
          <div
            css={css`
              font-size: 1.4rem;
              color: #486581;
            `}
          >
            {startDate} - {endDate}
          </div>
          <div
            css={css`
              margin-top: 1.6rem;
            `}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Language: React.FC<{
  icon: JSX.Element;
  title: string;
}> = ({ title, icon }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 0.8rem;
        background-color: #f0f4f8;
        border-radius: 8px;
        padding: 1.6rem;
        border: 1px solid #b3ecff;

        svg {
          width: 40px;
          height: 40px;
        }
      `}
    >
      <div>{icon}</div>
      <span
        css={css`
          font-size: 1.4rem;
          color: #486581;
        `}
      >
        {title}
      </span>
    </div>
  );
};

const sectionSubtitleStyles = css`
  display: inline-block;
  color: #486581;
  border-radius: 8px;
  margin-top: 0.4rem;
`;

const PdfCV = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #f0f4f8;
        overflow-y: auto;
        padding: 4rem;

        p,
        h1,
        h2 {
          color: #102a43;
        }

        @media all and (max-width: 480px) {
          padding: 1.6rem;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          width: 100%;
          max-width: 700px;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2.8px 2.1px rgba(0, 0, 0, 0.006),
            0 6.7px 5px rgba(0, 0, 0, 0.008), 0 12.5px 9.4px rgba(0, 0, 0, 0.01),
            0 22.3px 16.8px rgba(0, 0, 0, 0.012),
            0 41.8px 31.3px rgba(0, 0, 0, 0.014),
            0 100px 75px rgba(0, 0, 0, 0.02);
        `}
      >
        <header
          css={css`
            display: grid;
            grid-gap: 2.4rem;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            position: relative;
            overflow: hidden;
            padding: 4rem;

            @media all and (max-width: 480px) {
              padding: 2.4rem;
            }
          `}
        >
          <div
            css={css`
              max-width: 340px;
              position: relative;

              @media all and (max-width: 480px) {
                padding-bottom: 100%;
                height: 0;
              }

              & > * {
                height: 100%;
              }

              .img-wrapper {
                height: 100%;

                img {
                  border-radius: 8px;
                  overflow: hidden;

                  @media all and (max-width: 480px) {
                    position: absolute;
                    top: 0;
                    left: 0;
                  }
                }
              }
            `}
          >
            <LazyImg src="cv/profilo-cv.jpg" />
          </div>
          <div
            css={css`
              display: grid;
              grid-gap: 2.4rem;
              align-content: start;
              flex: 1;
            `}
          >
            <div
              css={css`
                display: grid;
              `}
            >
              <h1
                css={css`
                  font-size: 3.8rem;
                  color: #102a43;

                  @media all and (max-width: 480px) {
                    font-size: 3.2rem;
                  }
                `}
              >
                Emiliano Bucci
              </h1>
              <span
                css={css`
                  color: #243b53;
                  font-size: 1.8rem;
                  font-weight: 600;
                `}
              >
                Frontend developer
              </span>
            </div>
            <div
              css={css`
                background-color: #f0f4f8;
                padding: 1.6rem;
                border-radius: 8px;
                display: grid;
                grid-gap: 1.6rem;
                border: 1px solid #b3ecff;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              `}
            >
              <Contact title="Date of birth" content="13/08/1989" />
              <Contact title="Nationality" content="Argentina/Italian" />
              <Contact title="I live in" content="Casei Gerola, Italy" />
              <Contact title="Phone" content="3478367426" />
              <Contact
                title="Email"
                content={
                  <DefaultLink
                    href="mailto:emiliano.bucci@outlook.com"
                    css={css`
                      text-decoration: underline;
                      cursor: pointer;
                    `}
                  >
                    emiliano.bucci@outlook.com
                  </DefaultLink>
                }
              />
            </div>
          </div>
        </header>
        <main
          css={css`
            section {
              padding: 4rem;

              @media all and (max-width: 480px) {
                padding: 2.4rem;
              }
            }

            h2 {
              font-size: 2.4rem;
              font-weight: 600;
            }

            p {
              text-align: center;
              max-width: 640px;
              margin: 0 auto;
              font-size: 1.72rem;
              color: #fff;
            }
          `}
        >
          <section
            css={css`
              background-image: linear-gradient(
                to bottom right,
                #102a43,
                #334e68
              );

              p {
                color: #fff;
              }
            `}
          >
            <div
              css={css`
                margin: 3.2rem 0;
              `}
            >
              <p>
                I'm very attentive to the small details. Starting from the
                business needs, I build pleasant and accessible UI interfaces,
                with extreme attention to balance, perception, smoothness, and
                to the overall UX.
              </p>
            </div>
          </section>
          <section>
            <h2>Skills & Technologies</h2>
            <span css={sectionSubtitleStyles}>
              I'm mainly focused in the React world, and this are the
              technologies &/or tools I've used/i normally use.
            </span>

            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
                grid-gap: 1.6rem;
                margin-top: 2.4rem;

                svg {
                  width: 56px;
                  height: 56px;
                }
              `}
            >
              <Skill>
                <HTML />
              </Skill>
              <Skill>
                <CSS />
              </Skill>
              <Skill>
                <JS />
              </Skill>
              <Skill>
                <TS />
              </Skill>
              <Skill>
                <REACT />
              </Skill>
              <Skill>
                <NEXTJS />
              </Skill>
              <Skill>
                <JEST />
              </Skill>
              <Skill>
                <APOLLO />
              </Skill>
              <Skill>
                <ESLINT />
              </Skill>
              <Skill>
                <VERCEL />
              </Skill>
              <Skill>
                <VSCODE />
              </Skill>
              <Skill>
                <GIT />
              </Skill>
              <Skill>
                <GITHUB />
              </Skill>
              <Skill>
                <CY />
              </Skill>
              <Skill>
                <NPM />
              </Skill>
              <Skill>
                <STORYBOOK />
              </Skill>
              <Skill>
                <REACTSPRING />
              </Skill>
              <Skill>
                <NODEJS />
              </Skill>
              <Skill>
                <AWS />
              </Skill>
              <Skill>
                <JIRA />
              </Skill>
            </div>
          </section>
          <section
            css={css`
              background-image: linear-gradient(
                to bottom right,
                #102a43,
                #334e68
              );

              p {
                color: #fff;
              }
            `}
          >
            <p>
              Before becoming a Frontend developer (in late July 2018), I worked
              in other fields (I was a cook and a warehouse worker for Amazon in
              Italy). I'm happy to say that I can apply most of the skills and
              attitudes learned in other works in the Development world, and I
              realize how they've always been a plus.
            </p>
          </section>
          <section>
            <h2>Work experiences</h2>
            <span css={sectionSubtitleStyles}>
              What I've done so far in the development world.
            </span>
            <div
              css={css`
                display: grid;
                margin-top: 2.4rem;
                grid-gap: 2.4rem;
              `}
            >
              <WorkExperience
                logo={MYN}
                title="Myntelligence"
                startDate="March 2020"
                endDate="Current"
                description={
                  <>
                    MyVideo was absorbed by Myntelligence company but my work
                    changed just a little. I had the opportunity to confront
                    myself with many other Frontend Developers and Designers, as
                    well as we start to work with a more structured Agile
                    process.
                    <List
                      items={[
                        "Mentoring and pair programming with junior Frontend developers",
                        "Responsability of implementing from scratch a new styleguide in a vast legacy project",
                        `Responsability of choosing new or substitute tools to
                        improve a legacy project (css-in-js/documentation component libraries, ecc)`,
                      ]}
                    />
                    <DefaultLink href="http://myntelligence.com">
                      http://myntelligence.com
                    </DefaultLink>
                  </>
                }
              />

              <WorkExperience
                logo={MYVIDEO}
                title="MyVideo (formerly TheOutplay)"
                startDate="July 2018"
                endDate="March 2020"
                description={
                  <>
                    This was my first experience as a Frontend developer. I
                    worked on the development of the company dashboard (a
                    platform used by the users to visualize the insights and
                    perform actions).
                    <List
                      items={[
                        "React & Typescript for the Frontend project",
                        "GraphQL for the backend services (and Apollo for the client)",
                        "Recharts & Amcharts for displaying charts in the platform",
                        "Legacy code migration and applying of best code practice during refactoring",
                        "Unit and integration test coverage using Jest",
                      ]}
                    />
                    <span
                      css={css`
                        display: inline-block;
                        margin-top: 2.4rem;
                      `}
                    >
                      In parallel, I've also worked on the development and
                      maintenance of the Widget project, a video player used by
                      thousands of websites to deliver Advertising and video
                      Content.
                    </span>
                    <List
                      items={[
                        "Frontend project powered by Preact and Redux-Saga",
                        "Video player implementation through <iframe />",
                        "Extreme attention to multiple device/browser media policies (video and audio), as well to different functionalities like autoplay",
                        "Android and iOS Mobile debugging (Xcode simulator for iOS debugging)",
                        `Implementation of a custom plugin system, to execute third part js code
                         to interact with the Widget (and eventually customize some internal functionalities) without relying on it`,
                        "Implementation of third part services like comscore.js or IMA SDKs",
                      ]}
                    />
                    <DefaultLink href="http://theoutplay.com">
                      http://theoutplay.com
                    </DefaultLink>
                  </>
                }
              />
              <WorkExperience
                logo={TALENTGARDEN}
                title="Codemaster 2018 edition"
                startDate="March 2018"
                endDate="July 2018"
                description={
                  <>
                    Everything started here. After 2 years of self-learning
                    (HTML, CSS & JavaScript), I decided to change life path and
                    I apply for this master. After three intense months, I get
                    my first job as a Junior Frontend Developer.
                    <DefaultLink href="https://talentgarden.org">
                      https://talentgarden.org
                    </DefaultLink>
                  </>
                }
              />
            </div>

            <div
              css={css`
                display: grid;
                grid-gap: 2.4rem;
                margin-top: 4rem;
              `}
            >
              <h2>Side projects</h2>

              <WorkExperience
                logo={REACTSPRINGCAROUSEL}
                title="React spring carousel js"
                startDate="December 2020"
                endDate="January 2021"
                description={
                  <>
                    I've also started to dive into the open source world. My
                    first project is a React Carousel Component powered by
                    react-spring.
                    <List
                      items={[
                        "Open source library powered by reate-create-library",
                      ]}
                    />
                    <DefaultLink href="https://github.com/Emiliano-Bucci/react-spring-carousel-js">
                      Github repository
                    </DefaultLink>
                    <DefaultLink href="https://react-spring-carousel-js.emilianobucci.com/">
                      Official documentation
                    </DefaultLink>
                    <span
                      css={css`
                        font-size: 1.48rem;
                        color: #243b53;
                      `}
                    >
                      PS: The Official documentation website is a custom Next.js
                      application!
                    </span>
                  </>
                }
              />
              <WorkExperience
                logo={BURGEZ}
                title="Burgez"
                startDate="January 2020"
                endDate="Current"
                description={
                  <>
                    I first start to work for Burgez doing small changes to the
                    existing website (a simple React application). Later on, I
                    rewrite it from scratch using Next.js and hosting it on
                    Vercel, as it was lacking the SEO part and there were some
                    performance issues. Currently, I take care of the
                    maintenance and the implementation of new features.
                    <DefaultLink href="https://burgez.com">
                      https://burgez.com
                    </DefaultLink>
                  </>
                }
              />
              <WorkExperience
                logo={WILDTREK}
                title="Wild Trek"
                startDate="June 2019"
                endDate="Current"
                description={
                  <>
                    I start to work for the Wild Trek company in the middle of
                    2019. I help them during the initial phases of the project
                    and I took care of developing their website from scratch (I
                    took care of Frontend and Backend development and all design
                    aspects).
                    <List
                      items={[
                        "Next.js application on the Frontend side (hosted on Vercel)",
                        "Wordpress for the content part",
                        "Hasura GraphQL for the main database and Authorization logic",
                        "Firebase for Authentication logic",
                      ]}
                    />
                    <DefaultLink href="https://wildtrek.it">
                      https://wildtrek.it
                    </DefaultLink>
                  </>
                }
              />
            </div>
            <div
              css={css`
                display: flex;
                justify-content: center;
                margin-top: 4rem;
              `}
            >
              <DefaultLink
                href="https://linkedin.com/in/emiliano-bucci"
                css={css`
                  cursor: pointer;
                  background-color: #d9e2ec;
                  border-radius: 8px;
                  color: #486581;
                  padding: 1.2rem;
                  text-decoration: underline;
                `}
              >
                Linkedin profile
              </DefaultLink>
            </div>
          </section>
          <section
            css={css`
              background-image: linear-gradient(
                to bottom right,
                #102a43,
                #334e68
              );

              p {
                color: #fff;
              }
            `}
          >
            <div
              css={css`
                margin: 3.2rem 0;
              `}
            >
              <p>
                I like to see myself as a versatile guy; besides the development
                world, I like cooking, photographing, taking care of plants at
                home, I like Red wine and Whisky (in particular Talisker), I
                read a lot (and hear a lot of podcasts) and I love hiking and
                traveling anywhere in search of some unexpected adventure!
              </p>
            </div>
          </section>
          <section
            css={css`
              text-align: center;
            `}
          >
            <h2>Languages I speak</h2>
            <span
              css={css`
                display: block;
                color: #243b53;
                margin-top: 0.4rem;
              `}
            >
              <strong>Mother tongue's:</strong> <span>Spanish</span>
            </span>
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                justify-content: center;
                margin-top: 2.4rem;
                grid-gap: 1.6rem;
              `}
            >
              <Language title="Spanish (C2)" icon={<ARGENTINAFLAG />} />
              <Language title="Italian (C2)" icon={<ITALYFLAG />} />
              <Language title="English (B2)" icon={<ENGLISHFLAG />} />
            </div>
          </section>
          <section
            css={css`
              text-align: center;
              color: #486581;
              font-weight: 600;
              border-top: 1px solid #d9e2ec;
            `}
          >
            <span>CV made with Next.js</span>
          </section>
        </main>
      </div>
    </div>
  );
};

const Page = () => <PdfCV />;
export default Page;
