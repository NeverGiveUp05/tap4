'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const faqItems = [
  {
    id: 1,
    question: 'What is Tap4 AI?',
    answer:
      'Tap4 AI ( tap4.ai ) is the best place to discover and access your favorite AI tools for free. Whether you need AI writing tools, marketing tools, paraphrasing tools, SEO tools, study tools, generator tools, research tools, art tools, music tools, video tools, coding tools, photo tools, and more, you can find them all here. Is there an AI for that? Tap4 AI Tools Directory has it covered.',
  },
  {
    id: 2,
    question: 'How do I find AI tools in Tap4 AI?',
    answer:
      'To find AI tools in Tap4 AI, open tap4.ai, explore the available AI tools, and click on the ones you need for detailed information and to visit their websites.',
  },
  {
    id: 3,
    question: 'What are the main features of Tap4 AI?',
    answer:
      'Tap4 AI offers a free AI tools directory to discover and access your favorite tools, as well as a startup list for AI tools developers.',
  },
  {
    id: 4,
    question: 'Is it free to submit AI tools to Tap4 AI?',
    answer:
      'There are three options for submission. You can submit your AI product freely with a link for Tap4 AI. Also, you can submit with the credits in Tap4 AI.',
  },
  {
    id: 5,
    question: 'What categories of AI tools does Tap4 AI support?',
    answer:
      'Tap4 AI Tools Directory supports over 230+ categories. Stay tuned as we continuously update our categories.',
  },
  {
    id: 6,
    question: 'How frequently are the AI tools updated in Tap4 AI?',
    answer: 'The list of AI tools on Tap4 AI is updated daily to bring you the latest and best AI tools.',
  },
];

export default function FAQAccordion() {
  return (
    <Accordion.Root type='single' className='grid w-full grid-cols-1 gap-3 px-3 lg:grid-cols-2 lg:px-0' collapsible>
      {faqItems.map((item) => (
        <Accordion.Item key={`${item.id}`} value={`${item.id}`} className='w-full space-y-3 border-b-0'>
          <Accordion.Header className='flex'>
            <Accordion.Trigger
              className={cn(
                'flex flex-1 items-center justify-between transition-all',
                '[&[data-state=open]>svg]:rotate-180',
                'rounded-xl border border-[#2F2F2F]/0 bg-[#2C2D36] p-5',
                'text-left text-base font-semibold hover:no-underline lg:text-lg',
              )}
            >
              {item.question}
              <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={cn(
              'overflow-hidden text-sm transition-all',
              'data-[state=closed]:animate-accordion-up',
              'data-[state=open]:animate-accordion-down',
            )}
          >
            <div className='rounded-xl border border-[#2F2F2F]/0 bg-[#2C2D36] p-5 text-base text-white/70'>
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
