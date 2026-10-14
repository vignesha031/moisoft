'use client';
import * as Accordion from '@radix-ui/react-accordion';
import {Plus} from 'lucide-react';
import {faqs} from '@/data/content';
export function FAQ(){return <Accordion.Root type="single" collapsible className="faq-list">{faqs.map(([question,answer],i)=><Accordion.Item value={`faq-${i}`} key={question} className="faq-item"><Accordion.Header><Accordion.Trigger><span lang="ta">{question}</span><Plus size={20}/></Accordion.Trigger></Accordion.Header><Accordion.Content><p lang="ta">{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root>;}
