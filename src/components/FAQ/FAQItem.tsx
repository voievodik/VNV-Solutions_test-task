import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { QuestionType } from '../../types/QuestionType';

type Props = {
  question: QuestionType;
}

export const FAQItem: React.FC<Props> = ({ question }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (questionId: number) => {
    if (questionId === selectedId) {
      setSelectedId(null);

      return;
    }

    setSelectedId(questionId);
  }

  return (
    <li key={question.id} className="faq__item">
      <div className="faq__item-box">
        <h5 className="faq__item-question">
          <FormattedMessage id={question.question} defaultMessage={question.question}/>
        </h5>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleSelect(question.id)}
        >
          {selectedId === question.id
            ? <AiOutlineMinus />
            : <AiOutlinePlus />}
        </span>
      </div>

      {selectedId === question.id && (
        <p className="faq__item-answer">
          <FormattedMessage id={question.answer} defaultMessage={question.answer}/>
        </p>
      )}
    </li>
  )
}
