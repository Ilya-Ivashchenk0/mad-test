import { questionType } from "../features/steps-factory/types"

export const questions: questionType[] = [
  {
    id: 1,
    questionMode: 'checkbox',
    answerMode: 'once',
    title: 'Что дожен знать разработчик? Выберите один из вариантов ответа',
    answers: [
      'HTML, CSS и JS',
      'Kotlin, PHP и JS',
      'PHP, CSS и JS'
    ]
  },
  {
    id: 2,
    questionMode: 'input',
    answerMode: 'text',
    title: 'Вопрос? Напишите ответ в произвольном виде',
  },
  {
    id: 3,
    questionMode: 'textarea',
    answerMode: 'text',
    title: 'Очень длинный вопрос, длинный вопрос, длинный вопрос, длинный вопрос, длинный вопрос, длинный вопрос? Напишите ответ в произвольном виде',
  },
  {
    id: 4,
    questionMode: 'checkbox',
    answerMode: 'many',
    title: 'Вопрос? Можно выбрать несколько вариантов',
    answers: [
      'HTML, CSS и JS',
      'Kotlin, PHP и JS',
      'PHP, CSS и JS'
    ]
  },
]