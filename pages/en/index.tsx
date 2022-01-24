import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Figure } from "../../components/Figure";
import { Link } from "../../components/Link";
import { List } from "../../components/List";
import { Page } from "../../layouts/Page";
import gdcrImg from "../../public/static/img/gdcr19.jpeg";

export default function Homepage() {
  return (
    <Page>
      <Page.Seo>
        <Page.Seo.Url>https://tddworkshop.com/en</Page.Seo.Url>

        <Page.Seo.Title>Learn how to write better software in a fast, sustainable way</Page.Seo.Title>

        <Page.Seo.Description>
          Hire this technical training and enjoy a friendly, complete introduction to test-driven development.
        </Page.Seo.Description>

        <Page.Seo.Image>https://tddworkshop.com/static/img/social_en.png</Page.Seo.Image>
      </Page.Seo>

      <Page.Header>
        <Page.Row>
          <Page.Header.Text>
            Learn how to write <strong>better software</strong>
            <br />
            in a fast, <strong>sustainable</strong> way.
          </Page.Header.Text>

          <Page.Header.Buttons>
            <Page.Header.Button variant="outline" href="#workshop">
              Read more about the workshop
            </Page.Header.Button>

            <Page.Header.Button variant="solid" href="#contact">
              Book a training session
            </Page.Header.Button>
          </Page.Header.Buttons>
        </Page.Row>
      </Page.Header>

      <Page.Main>
        <Page.Row>
          <Page.Heading>Why you should care about TDD</Page.Heading>

          <Page.Text>
            There are few techniques as powerful and yet widely misunderstood as test-driven development. Although not a
            silver bullet, TDD enables two often-overlooked benefits: <strong>direction</strong> (short test 🔄 code
            cycles towards a complete solution) and <strong>confidence</strong> (verifying your changes against a
            working test suite).
          </Page.Text>

          <Page.Text>
            Learn TDD and become a more productive software engineer: avoid blockers and overengineering. Instead, focus
            on delivering value (a.k.a, fixing your users' pains) at a fast, sustainable pace while writing
            well-designed, well-tested code.
          </Page.Text>

          <Page.Heading id="workshop">About the workshop</Page.Heading>

          <Page.Text>
            People attending this workshop will enjoy a 10-hours introduction to the TDD practice. Even if it is
            impossible to master test-driven development in a couple of days, participants will end with a complete
            understanding of the methodology and be ready to start on the right foot.
          </Page.Text>

          <Page.Text>
            Since there is only one way to learn test-driven development (<em>practice, practice, and practice</em>),
            the workshop is <strong>hands-on</strong>, with plenty of time to do <strong>pair-programming</strong> and{" "}
            <strong>live coding</strong> sessions that I will use to explain different concepts.
          </Page.Text>

          <Page.Text>
            Please, keep in mind that due to COVID-19, the workshop is primarily online, and we can divide the training
            sessions into several days.
          </Page.Text>

          <Page.Subheading>You will learn</Page.Subheading>

          <List>
            <List.Item>
              How to start doing TDD. This is the workshop's central outcome, and I will ensure you have all the tools
              to start practicing TDD effectively.
            </List.Item>

            <List.Item>
              How to write good tests and how different tests (unitary, integration) enable different ways to practice
              TDD.
            </List.Item>

            <List.Item>How to write testable software.</List.Item>

            <List.Item>How to use test doubles to simplify writing tests for legacy applications.</List.Item>
          </List>

          <Page.Subheading>Programming languages and technologies</Page.Subheading>

          <Page.Text>
            <strong>The workshop is language-agnostic</strong>, even though it will use JavaScript/TypeScript for the
            examples and live coding sessions. For teams working with React, we can adapt the exercises to practice TDD
            on components and front-end applications.
          </Page.Text>

          <Page.Subheading>Pricing</Page.Subheading>

          <Page.Text>
            The price is <strong>250EUR per participant</strong> (VAT not included).
          </Page.Text>

          <Figure>
            <Figure.Image
              src={gdcrImg}
              alt="Sergio talking about TDD and software development best practices at Spotahome offices in Madrid (2019)."
            />

            <Figure.Caption>
              Talking about TDD and software development best practices at Spotahome offices in Madrid (2019).
            </Figure.Caption>
          </Figure>

          <Page.Heading id="contact">About me</Page.Heading>

          <Page.Text>
            Hi! 👋 I'm{" "}
            <Link href="https://www.linkedin.com/in/sergioalvarezsuarez/" target="_blank" rel="noreferrer">
              Sergio
            </Link>
            , and I have been developing software for a living for a decade. During this time, I have had the luck to
            work with (and sometimes even lead) world-class software engineers that are now working in top-notch
            technology companies. I have been practicing TDD nearly all this time and successfully taught the process to
            dozen engineers (at work and in several software events). Moreover, I have introduced and successfully
            applied several of TDD's closest practices (such as continuous deployment and trunk-based development) to
            product teams at different startups.
          </Page.Text>

          <Page.Text>
            If you would like to hire this technical training, please use the form below or drop me a line at
            hola@codecoolture.com.
          </Page.Text>

          <Page.Subheading>Published material</Page.Subheading>

          <List>
            <List.Item>
              <Link href="https://bit.ly/34ZnpuO" target="_blank" rel="noreferrer">
                A list of resources that helped me during my journey learning TDD
              </Link>
            </List.Item>

            <List.Item>
              <Link
                href="https://codecoolture.com/blog/applying-atdd-to-game-of-life/"
                target="_blank"
                rel="noreferrer"
              >
                [Spanish] Applying (A)TDD to resolve the Game Of Life's kata.
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://github.com/codecoolture/react-atdd-playground" target="_blank" rel="noreferrer">
                codecoolture/react-atdd-playground
              </Link>
              : Template to (deliberate) practice your test-driven development skills.
            </List.Item>
          </List>

          <Page.Subheading>Contact</Page.Subheading>

          <Page.ContactForm onSuccessMessage="Thank you! I will respond to you promptly.">
            <Page.ContactForm.Field name="email">
              <Page.ContactForm.Field.Label>Your email</Page.ContactForm.Field.Label>

              <Page.ContactForm.Field.Hint>Use an email where you want to receive my reply</Page.ContactForm.Field.Hint>

              <Page.ContactForm.Field.Input />

              <Page.ContactForm.Field.Error>Please, use a valid email.</Page.ContactForm.Field.Error>
            </Page.ContactForm.Field>

            <Page.ContactForm.Field name="message">
              <Page.ContactForm.Field.Label>Your message</Page.ContactForm.Field.Label>

              <Page.ContactForm.Field.Hint>
                This is <strong>optional</strong>. You may use it to ask for more information, tell me about your
                project, or say hi :-)
              </Page.ContactForm.Field.Hint>

              <Page.ContactForm.Field.TextArea numberOfRows={5} />
            </Page.ContactForm.Field>

            <Page.ContactForm.Submit>Send your message</Page.ContactForm.Submit>
          </Page.ContactForm>
        </Page.Row>
      </Page.Main>

      <Page.Footer>
        <Page.Footer.Languages>
          <Page.Footer.Languages.Title>Language</Page.Footer.Languages.Title>

          <Page.Footer.Languages.List>
            <Page.Footer.Languages.Language>English</Page.Footer.Languages.Language>
            <Page.Footer.Languages.Language href="/es">Español</Page.Footer.Languages.Language>
          </Page.Footer.Languages.List>
        </Page.Footer.Languages>

        <Page.Footer.Text>
          TDD is a fundamental practice for high-performing teams. In this technical training, we will go deep into its
          motivations and objectives and introduce several tips and tricks to apply test-driven development effectively.
        </Page.Footer.Text>

        <Page.Footer.Copy>{(year) => <>&copy; {year} The TDD Workshop</>}</Page.Footer.Copy>

        <Page.Footer.Social>
          <Page.Footer.Social.Link href="https://twitter.com/codecoolture">
            <FaTwitter />
          </Page.Footer.Social.Link>

          <Page.Footer.Social.Link href="https://github.com/codecoolture">
            <FaGithub />
          </Page.Footer.Social.Link>

          <Page.Footer.Social.Link href="https://www.linkedin.com/in/sergioalvarezsuarez/">
            <FaLinkedin />
          </Page.Footer.Social.Link>
        </Page.Footer.Social>
      </Page.Footer>
    </Page>
  );
}
