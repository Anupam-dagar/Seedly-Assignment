import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Advertisement } from "./Components/Advertisement";
import { Answer } from "./Components/Answer";
import { AnswerTopBar } from "./Components/Answertopbar";
import { Footer } from "./Components/Footer";
import { FooterIcons } from "./Components/Footericons";
import { Header } from "./Components/Header";
import { NavigationBar } from "./Components/NavigationBar";
import { NavItem } from "./Components/Navitem";
import { QuestionAnswerCard } from "./Components/Questionanswercard";
import { QuestionCard } from "./Components/Questioncard";
import { QuestionCardTopics } from "./Components/Questioncardtopics";
import { QuestionFeed } from "./Components/Questionfeed";
import { QuestionFeedTopbar } from "./Components/Questionfeedtopbar";
import { QuestionFollowShareBar } from "./Components/Questionfollowsharebar";
import { Sidebar } from "./Components/Sidebar";
import { BrowserRouter } from "react-router-dom";

it("should render App component", () => {
  const component = shallow(<App />);

  expect(component).toMatchSnapshot();
});

it("should render Navigation Bar component", () => {
  const component = shallow(<NavigationBar />);

  expect(component).toMatchSnapshot();
});

it("should render Advertisement component", () => {
  const component = shallow(<Advertisement />);

  expect(component).toMatchSnapshot();
});

it("should render Answer component", () => {
  const component = shallow(<Answer />);

  expect(component).toMatchSnapshot();
});

it("should render AnswerTopBar component", () => {
  const user = {
    id: 1,
    name: "Jennings Parisian",
    designation: "Investor Factors Developer",
    level: {
      id: 4,
      name: "Level 4",
    },
  };
  const time = 12;
  const component = shallow(<AnswerTopBar user={user} time={time} />);

  expect(component).toMatchSnapshot();
});

it("should render Footer component", () => {
  const component = shallow(<Footer />);

  expect(component).toMatchSnapshot();
});

it("should render FooterIcons component", () => {
  const component = shallow(<FooterIcons />);

  expect(component).toMatchSnapshot();
});

it("should render Header component", () => {
  const component = shallow(<Header />);

  expect(component).toMatchSnapshot();
});

it("should render NavItem component", () => {
  const component = shallow(<NavItem />);

  expect(component).toMatchSnapshot();
});

it("should render QuestionAnswerCard component", () => {
  const answer = {
    id: 186,
    content:
      "Eius consectetur consequatur harum molestiae nulla delectus omnis quidem molestiae. Error ut ex tempora provident. Voluptatem ea perferendis occaecati rerum atque.\n \rNemo quos modi. Earum tempore sint eligendi unde atque dolorum. Ab blanditiis qui ut illum.\n \rVoluptatem eum doloremque. Exercitationem optio dolorum quaerat occaecati voluptas vero error. Quis sunt blanditiis laborum quam qui expedita quos. Est molestias sint dignissimos consequatur inventore explicabo.",
    questionId: 44,
    user: {
      id: 6,
      name: "Aisha Powlowski",
      designation: "Customer Security Supervisor",
      level: {
        id: 4,
        name: "Level 4",
      },
    },
    likeCount: 0,
    answerUpdated: 4,
  };
  const component = shallow(<QuestionAnswerCard answer={answer} />);

  expect(component).toMatchSnapshot();
});

it("should render QuestionCard component", () => {
  const question = {
    id: 14,
    title:
      "Nisi nihil tempora commodi eligendi excepturi exercitationem. Illum fuga sint. Doloremque iste voluptatem velit occaecati ea voluptas omnis.",
    followers: 0,
    isTrending: true,
    isUnanswered: false,
    topics: [
      {
        id: 1,
        name: "haptic",
        isFeatured: false,
      },
      {
        id: 8,
        name: "Connecticut",
        isFeatured: false,
      },
      {
        id: 17,
        name: "Visionary",
        isFeatured: true,
      },
      {
        id: 22,
        name: "generate",
        isFeatured: false,
      },
      {
        id: 50,
        name: "Avon",
        isFeatured: false,
      },
      {
        id: 24,
        name: "Hills",
        isFeatured: true,
      },
      {
        id: 19,
        name: "payment",
        isFeatured: true,
      },
      {
        id: 50,
        name: "Avon",
        isFeatured: false,
      },
      {
        id: 20,
        name: "Licensed",
        isFeatured: true,
      },
    ],
    answers: [
      {
        id: 4,
        content:
          "Id voluptates magni. Molestias iusto quo saepe quia deleniti inventore ut non modi. Quas quo et. Aut saepe dolor dignissimos et dolor cumque maxime repellendus animi. Voluptatum repellat autem voluptatibus quis voluptates. Quos rem voluptatem voluptatem earum consequatur sint.\n \rNon voluptas dolorum cumque dolores voluptas fugit fugit pariatur dolorem. Velit iste maiores libero placeat saepe. Eveniet repellendus a recusandae similique quis molestiae sit sint. Dolorum aut consequuntur quod laborum autem fugiat.\n \rQuidem ut eius delectus unde velit iure sed tempore. Ut distinctio enim quod maiores. Est et ea voluptatem rerum. Iure explicabo distinctio nihil. Ipsam similique ratione est.",
        questionId: 14,
        user: {
          id: 3,
          name: "Madisen Brekke",
          designation: "Senior Web Designer",
          level: {
            id: 5,
            name: "Level 5",
          },
        },
        likeCount: 4,
        answerUpdated: 1,
      },
    ],
  };
  const component = shallow(<QuestionCard questionData={question} />);

  expect(component).toMatchSnapshot();
});

it("should render QuestionCardTopics component", () => {
  const topics = [
    {
      id: 2,
      name: "calculating",
      isFeatured: true,
    },
    {
      id: 1,
      name: "haptic",
      isFeatured: false,
    },
    {
      id: 19,
      name: "payment",
      isFeatured: true,
    },
  ];
  const component = shallow(<QuestionCardTopics topics={topics} />);

  expect(component).toMatchSnapshot();
});

it("should render QuestionFeed component", () => {
  const questions = [
    {
      id: 76,
      title:
        "Voluptates natus ut commodi nisi temporibus veniam quisquam omnis. Non minima ab. Officia nisi voluptas ut aut rerum ut commodi accusantium eius. Et quibusdam sed temporibus qui. Minima alias fugit ipsam optio accusantium adipisci ullam voluptates ut.",
      followers: 7,
      isTrending: false,
      isUnanswered: false,
      topics: [
        {
          id: 2,
          name: "calculating",
          isFeatured: true,
        },
        {
          id: 1,
          name: "haptic",
          isFeatured: false,
        },
        {
          id: 19,
          name: "payment",
          isFeatured: true,
        },
      ],
      answers: [
        {
          id: 114,
          content:
            "Impedit architecto adipisci ea veniam dolores eligendi commodi sint. Reiciendis cupiditate id pariatur perferendis. Dolore adipisci rerum voluptatem tenetur et ut. Non magnam vitae sit ut. Officia laboriosam dignissimos unde corporis cumque error ut minima asperiores.\n \rNumquam repellendus nam. Nihil soluta temporibus culpa. Et voluptas ea qui impedit. Doloribus qui qui.\n \rEt architecto nemo officiis soluta nulla eos. Nostrum sed minima expedita optio qui sint laboriosam quibusdam. Odit voluptatem ullam quo aut nobis vel suscipit.",
          questionId: 76,
          user: {
            id: 2,
            name: "Everett D'Amore",
            designation: "Forward Optimization Designer",
            level: {
              id: 4,
              name: "Level 4",
            },
          },
          likeCount: 7,
          answerUpdated: 1,
        },
        {
          id: 127,
          content:
            "Et autem voluptatem iusto vero quia quia. Eum eum velit laudantium quod. Occaecati illo quia.\n \rVel et itaque quos voluptate est repellat nihil officiis. Voluptas odit sint inventore accusamus sit delectus. Porro animi iste repudiandae voluptatem iure ut natus. Et cupiditate nostrum soluta optio nihil odit voluptatem. Molestias quaerat sunt rerum voluptatem in est enim doloribus eveniet.\n \rExcepturi culpa velit. Nihil repellat nostrum mollitia aut. Atque dolorem voluptas eveniet. Veniam ducimus voluptatum dicta error ut. Voluptatem rerum ut accusamus omnis.",
          questionId: 76,
          user: {
            id: 5,
            name: "Samantha Mayert",
            designation: "Regional Solutions Facilitator",
            level: {
              id: 5,
              name: "Level 5",
            },
          },
          likeCount: 2,
          answerUpdated: 14,
        },
        {
          id: 168,
          content:
            "Voluptas sunt qui exercitationem non alias. Molestias at iure sed et id fuga officiis rerum. Similique est tenetur. Qui necessitatibus eos aspernatur sint nisi asperiores veritatis sapiente dignissimos.\n \rMinus excepturi quis dolores. Aut et at enim rerum sit quo non qui et. Mollitia placeat et veniam fugiat. Cumque explicabo distinctio enim labore quidem sit saepe ut quasi. Non est inventore et consequuntur.\n \rQui exercitationem non illum architecto voluptatem ut. Reiciendis eum repudiandae exercitationem tempore quia ut illum. Beatae ut id. Magni et blanditiis fuga dolorem distinctio voluptate voluptas dolorum. Voluptatem nobis voluptatem tenetur doloribus aut recusandae quaerat. Ut impedit ut alias tenetur.",
          questionId: 76,
          user: {
            id: 3,
            name: "Madisen Brekke",
            designation: "Senior Web Designer",
            level: {
              id: 5,
              name: "Level 5",
            },
          },
          likeCount: 1,
          answerUpdated: 2,
        },
      ],
    },
    {
      id: 4,
      title:
        "Est sunt commodi. Reiciendis alias nam ut consequatur alias maiores temporibus ut culpa.",
      followers: 0,
      isTrending: false,
      isUnanswered: true,
      topics: [
        {
          id: 2,
          name: "calculating",
          isFeatured: true,
        },
        {
          id: 43,
          name: "paradigms",
          isFeatured: false,
        },
        {
          id: 14,
          name: "platforms",
          isFeatured: true,
        },
        {
          id: 3,
          name: "back-end",
          isFeatured: true,
        },
        {
          id: 36,
          name: "SMTP",
          isFeatured: false,
        },
        {
          id: 46,
          name: "Ball",
          isFeatured: true,
        },
        {
          id: 43,
          name: "paradigms",
          isFeatured: false,
        },
        {
          id: 1,
          name: "haptic",
          isFeatured: false,
        },
      ],
      answers: [],
    },
  ];
  const component = shallow(<QuestionFeed questions={questions} />);

  expect(component).toMatchSnapshot();
});

it("should render QuestionFeedTopBar component", () => {
  const component = shallow(<QuestionFeedTopbar />);

  expect(component).toMatchSnapshot();
});

it("should render QuestionFollowShareBar component", () => {
  const component = shallow(<QuestionFollowShareBar />);

  expect(component).toMatchSnapshot();
});

it("should render Sidebar component", () => {
  const component = shallow(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );

  expect(component).toMatchSnapshot();
});
