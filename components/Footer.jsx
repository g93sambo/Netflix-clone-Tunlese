import * as React from "react"
const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-plus"
      viewBox="0 0 16 16"
      style={{ cursor: 'pointer', marginTop: '8px' }}
    >
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-x"
      viewBox="0 0 16 16"
      style={{ cursor: 'pointer', marginTop: '8px' }}
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
};





const Accordion = ({ title, content }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <div className="accordion-header">
        <h5 className="accordion-title">{title}</h5>
        <div onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <PlusIcon />}
        </div>
      </div>
      <div className="divider"></div>
      {open && <p className="content">{content}</p>}
    </div>
  );
};



export default function Footer() {
  const accordionData = [
    {
      title: 'What is Netflix?',
      content: (
        <span>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          <br />
          <br />
          You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
        </span>
      )
    },
    {
      title: 'How much does Netflix cost?',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.',
    },
    {
      title: 'Where can I watch?',
      content:
        'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
    },
    {
      title: 'How do I cancel?',
      content:
        'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      title: 'What can I watch on Netflix?',
      content:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      title: 'Is Netflix good for kids?',
      content:
        'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
    },
  ];
  return (
    <>
      <div className="footer-container">
        <div className="footer-heading">
          <h1>Frequently Asked Questions.</h1>
        </div>
        <div className="accordion-container">
          {accordionData.map((data) => {
            return <Accordion title={data.title} content={data.content} />;
          })}
        </div>
        <div className="container-footer">
          <form className="form-netflix">
            <h3 className="ready-to">Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="email-form">
              <ul className="email-list">
                <li className="email-list-li">
                  <div className="email-list-li-div1">
                    <div className="email-list-li-div2">
                      <label className="email-list-label">
                        <input type="email" className="form-control" />
                        <label className="email-list-label2">Email Address</label>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="button-email">
                <button type="button" className="btn-email">
                  <span className="glyphicon">Get Started.</span>
                  <span className="glyphicon-go">
                    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path></svg>
                  </span>

                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}