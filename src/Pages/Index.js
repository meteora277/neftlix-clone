import Jumbotron from "../components/jumbotron";
import jumboData from "../fixtures/jumbo.json";
import Faq from "../components/FAQ";
import faqData from "../fixtures/faqs.json";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Index(){

    return (
        <div>
      
      <Header />
      {jumboData.map((item) => {
        return (
          <Jumbotron.Container key={item.id}>
            <Jumbotron direction={item.direction} data={item} />
          </Jumbotron.Container>
        );
      })}
      <Faq faq={faqData} />
      <Header.Flexbox
        css={`
          padding-bottom: 5rem;
        `}
      >
        <Header.Subtitle>
          Ready to watch? Enter your email to create or restart your membership.
        </Header.Subtitle>
        <Header.SignUp small uwu/>
      </Header.Flexbox>

      <Footer />
    </div>
    )

}
