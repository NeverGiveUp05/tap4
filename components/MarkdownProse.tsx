import React from 'react';
import Link from 'next/link';
import { ChevronRight, Circle, CircleHelp, FileText, Lightbulb } from 'lucide-react';
import Markdown from 'react-markdown';

export default function MarkdownProse({
  content,
  slug,
}: {
  content: {
    introduction: string;
    feature: string;
    faq: string;
  };
  slug: string;
}) {
  return (
    <div className='flex flex-col gap-5 px-3 lg:gap-10 lg:px-0'>
      {/* Introduction Section */}
      {content.introduction && (
        <div>
          <Link href={`/ai/${slug}/introduction/`}>
            <div className='flex min-h-10 w-fit items-center justify-center gap-2 rounded-2xl rounded-bl-none border-2 border-[#2C2D36] px-5 py-1 hover:border-tap4-gold'>
              <div className='relative h-[20px] w-[20px] text-[#FFE600]'>
                <Circle size={20} className='absolute inset-0' />
                <FileText size={12} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
              </div>
              <h2
                id='introduction'
                className='flex scroll-mt-32 flex-col text-base font-bold text-tap4-gold lg:flex-row'
              >
                <span className='line-clamp-1 capitalize'>
                  {slug.replace(/-/g, ' ')} <span className='mr-0.5 shrink-0'>-</span>
                </span>
                <span>Introduction</span>
              </h2>
              <ChevronRight className='size-4 text-tap4-gold' />
            </div>
          </Link>

          <div className='mt-1 flex w-full flex-col gap-0.5 overflow-hidden rounded-2xl rounded-tl-none border-2 border-[#2C2D36] bg-[#1F1D25]'>
            <div className='flex w-full flex-col gap-4 rounded-2xl rounded-tl-none bg-[#1F1D25] px-5 py-4'>
              <Markdown className='prose prose-invert max-w-full'>{content.introduction}</Markdown>
            </div>
          </div>
        </div>
      )}

      {/* Feature Section */}
      {content.feature && (
        <div>
          <Link href={`/ai/${slug}/feature/`}>
            <div className='flex min-h-10 w-fit items-center justify-center gap-2 rounded-2xl rounded-bl-none border-2 border-[#2C2D36] px-5 py-1 hover:border-tap4-gold'>
              <div className='relative h-[20px] w-[20px] text-[#FFE600]'>
                <Circle size={20} className='absolute inset-0' />
                <Lightbulb size={12} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
              </div>
              <h2 id='features' className='flex scroll-mt-32 flex-col text-base font-bold text-tap4-gold lg:flex-row'>
                <span className='line-clamp-1 capitalize'>
                  {slug.replace(/-/g, ' ')} <span className='mr-0.5 shrink-0'>-</span>
                </span>
                <span>Features</span>
              </h2>
              <ChevronRight className='size-4 text-tap4-gold' />
            </div>
          </Link>

          <div className='mt-1 flex w-full flex-col gap-0.5 overflow-hidden rounded-2xl rounded-tl-none border-2 border-[#2C2D36] bg-[#1F1D25]'>
            <div className='flex w-full flex-col gap-4 rounded-2xl rounded-tl-none bg-[#1F1D25] px-5 py-4'>
              <Markdown className='prose prose-invert max-w-full'>{content.feature}</Markdown>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {content.faq.length > 0 && (
        <div>
          <div>
            <div className='flex min-h-10 w-fit items-center justify-center gap-2 rounded-2xl rounded-bl-none border-2 border-[#2C2D36] px-5 py-1'>
              <div className='relative h-[20px] w-[20px] text-[#FFE600]'>
                <CircleHelp size={20} className='absolute inset-0' />
              </div>
              <h2 id='faq' className='flex scroll-mt-32 flex-col text-base font-bold text-tap4-gold lg:flex-row'>
                <span className='line-clamp-1 capitalize'>
                  {slug.replace(/-/g, ' ')} <span className='mr-0.5 shrink-0'>-</span>
                </span>
                <span>Frequently Asked Questions</span>
              </h2>
              <ChevronRight className='size-4 text-tap4-gold' />
            </div>
          </div>

          <div className='mt-1 flex w-full flex-col gap-0.5 overflow-hidden rounded-2xl rounded-tl-none border-2 border-[#2C2D36] bg-[#1F1D25]'>
            <div className='flex w-full flex-col gap-4 rounded-2xl rounded-tl-none bg-[#1F1D25] px-5 py-4'>
              <Markdown className='prose prose-invert max-w-full'>{content.faq}</Markdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
