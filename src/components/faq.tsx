import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQEntry {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items: FAQEntry[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, className }) => {
  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-base md:text-lg font-display font-semibold hover:text-accent hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
