import { uaLang, usLang } from "./variables";
import { FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';

import {
  customization,
  delivery_service,
  expertise,
  marketplace,
  time_saving,
  web_services,
  erp,
  bot_development,
  online_store,
  transfer_sites,
  software_development,
  support,
} from '../assets/images';

export const menu = [
  {
    id: 'menu.services',
    title: 'services',
  },
  {
    id: 'menu.projects',
    title: 'projects',
  },
  {
    id: 'menu.faq',
    title: 'faq',
  },
];

export const languages = [
  {
    id: uaLang,
    title: 'UA',
  },
  {
    id: usLang,
    title: 'EN',
  },
];

export const advantages = [
  {
    id: 1,
    title: "advantages.marketplace.title",
    description: "advantages.marketplace.description",
    imgUrl: marketplace,
  },
  {
    id: 2,
    title: "advantages.web-service.title",
    description: "advantages.web-service.description",
    imgUrl: web_services,
  },
  {
    id: 3,
    title: "advantages.delivery-service.title",
    description: "advantages.delivery-service.description",
    imgUrl: delivery_service,
  },
  {
    id: 4,
    title: "advantages.expertise.title",
    description: "advantages.expertise.description",
    imgUrl: expertise,
  },
  {
    id: 5,
    title: "advantages.time-saving.title",
    description: "advantages.time-saving.description",
    imgUrl: time_saving,
  },
  {
    id: 6,
    title: "advantages.web-service.title",
    description: "advantages.web-service.description",
    imgUrl: customization,
  },
];

export const services = [
  {
    id: 1,
    title: "services.software-development.title",
    description: "services.software-development.description",
    imgUrl: software_development,
    list: [
      "services.software-development.item1",
      "services.software-development.item2",
      "services.software-development.item3",
      "services.software-development.item4",
    ],
  },
  {
    id: 2,
    title: "services.creation-unique-ERP-systems.title",
    description: "services.creation-unique-ERP-systems.description",
    imgUrl: erp,
    list: [
      "services.creation-unique-ERP-systems.item1",
      "services.creation-unique-ERP-systems.item2",
      "services.creation-unique-ERP-systems.item3",
      "services.creation-unique-ERP-systems.item4",
    ],
  },
  {
    id: 3,
    title: "services.сreation-online-store.title",
    description: "services.сreation-online-store.description",
    imgUrl: online_store,
    list: [
      "services.сreation-online-store.item1",
      "services.сreation-online-store.item2",
      "services.сreation-online-store.item3",
      "services.сreation-online-store.item4",
    ],
  },
  {
    id: 4,
    title: "services.support.title",
    description: "services.support.description",
    imgUrl: support,
    list: [
      "services.support.item1",
      "services.support.item2",
      "services.support.item3",
      "services.support.item4",
    ],
  },
  {
    id: 5,
    title: "services.development-bots.title",
    description: "services.development-bots.description",
    imgUrl: bot_development,
    list: [
      "services.development-bots.item1",
      "services.development-bots.item2",
      "services.development-bots.item3",
      "services.development-bots.item4",
    ],
  },
  {
    id: 6,
    title: "services.transfer-sites.title",
    description: "services.transfer-sites.description",
    imgUrl: transfer_sites,
    list: [
      "services.transfer-sites.item1",
      "services.transfer-sites.item2",
      "services.transfer-sites.item3",
      "services.transfer-sites.item4",
    ],
  },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

export const projects = [
  {
    id: 1,
    title: "projects.marketplace.title",
    description: "projects.marketplace.description",
    imgUrl: "https://vnv.solutions/img/iren.png",
    linkUrl: "https://volstinyproduction.com",
  },
  {
    id: 2,
    title: "projects.delivery-service.title",
    description: "projects.delivery-service.description",
    imgUrl: "https://vnv.solutions/img/volstiny_production.png",
    linkUrl: "https://www.learnitlive.com",
  },
  {
    id: 3,
    title: "projects.web-service.title",
    description: "projects.web-service.description",
    imgUrl: "https://vnv.solutions/img/learnitlive.png",
    linkUrl: "https://irenbanquethall.com",
  },
];

export const socials = [
  {
    id: 1,
    icon: BsInstagram,
    link: "https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE=",
  },
  {
    id: 2,
    icon: BsTelegram,
    link: "https://t.me/vnv_solutions",
  },
  {
    id: 3,
    icon: AiFillFacebook,
    link: "https://www.facebook.com/profile.php?id=100088433736254",
  },
  {
    id: 4,
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/company/vnv-tech/",
  },
  {
    id: 5,
    icon: FaTiktok,
    link: "https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1",
  },
  {
    id: 6,
    icon: BiLogoGmail,
    link: "mailto:team@vnv.solutions",
  },
];

export const questions = [
  {
    id: 1,
    question: "faq.question1",
    answer: "faq.answer1",
  },
  {
    id: 2,
    question: "faq.question2",
    answer: "faq.answer2",
  },
  {
    id: 3,
    question: "faq.question3",
    answer: "faq.answer3",
  },
  {
    id: 4,
    question: "faq.question4",
    answer: "faq.answer4",
  },
  {
    id: 5,
    question: "faq.question5",
    answer: "faq.answer5",
  },
];
