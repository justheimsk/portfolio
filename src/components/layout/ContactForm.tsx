import {useState} from "react";
import {Input} from '../common/Input';
import {Button} from "../common/Button";
import {useTranslation} from "react-i18next";
import {FaPaperPlane} from "react-icons/fa6";

export function ContactForm() {
  const {t} = useTranslation();
  const [emailName, setEmailName] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  return (
    <form className="bg-white/10 border border-white/30 rounded-lg w-[400px] max-w-[100vw] h-auto p-4">
      <h4 className="text-white font-bold text-lg">{t('contact.title')}</h4>
      <div className="flex flex-col gap-5 mt-8">
        <Input onChange={(e) => setEmailName(e.target.value)} label={t('contact.name')} inputId="name" />
        <Input onChange={(e) => setEmailSubject(e.target.value)} label={t('contact.subject')} inputId="name" />
        <Input onChange={(e) => setEmailBody(e.target.value)} label={t('contact.message')} inputId="name" textarea />
      </div>
      <Button btype="submit" clickEffect="shrink" className="mt-6 w-full" bhref={`mailto:${process.env.PUBLIC_EMAIL}?subject=${emailSubject} de ${emailName}&body=${emailBody}`}>{t('contact.send')} <FaPaperPlane /></Button>
    </form>
  )
}
