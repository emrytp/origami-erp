'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Locale = 'tr' | 'en' | 'ru';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

const TEXTS: Record<
  Locale,
  {
    title: string;
    intro: string;
    definitions: {
      title: string;
      personalData: { label: string; text: string };
      sensitiveData: { label: string; text: string };
      controller: { label: string; text: string };
    };
    collection: { title: string; text: string };
    processing: { title: string; text: string };
    transfer: { title: string; text: string };
    storage: { title: string; text: string };
    rights: { title: string; items: string[] };
    retention: { title: string; text: string };
    updates: { title: string; text: string };
  }
> = {
  tr: {
    title:
      '6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA AYDINLATMA METNİ',
    intro:
      'Origami Yazılım olarak, kişisel verilerinizin hukuka uygun olarak toplanması, saklanması ve paylaşılması ile gizliliğinizi korumak amacıyla en üst seviyede güvenlik tedbirlerini almaktayız. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca sizleri şeffaf şekilde bilgilendiriyoruz.',
    definitions: {
      title: 'Tanımlar',
      personalData: {
        label: 'Kişisel Veri',
        text: 'Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi.'
      },
      sensitiveData: {
        label: 'Özel Nitelikli Kişisel Veri',
        text: 'Irk, etnik köken, sağlık bilgileri vb.'
      },
      controller: { label: 'Veri Sorumlusu', text: 'Origami Yazılım’dır.' }
    },
    collection: {
      title: 'Kişisel Verilerin Toplanma Şekli',
      text: 'Verileriniz web sitesi, formlar, e-posta, telefon, sosyal medya vb. yollarla toplanır.'
    },
    processing: {
      title: 'Kişisel Verilerinizin İşlenmesi',
      text: 'Hizmet sunmak, yasal yükümlülükleri yerine getirmek için işlenir.'
    },
    transfer: {
      title: 'Aktarım',
      text: 'Yasal zorunluluk halinde iş ortakları ve kurumlarla paylaşılabilir.'
    },
    storage: {
      title: 'Saklama',
      text: 'Veriler güvenli sunucularda saklanır ve korunur.'
    },
    rights: {
      title: 'KVKK Uyarınca Haklarınız',
      items: [
        'Verinizin işlenip işlenmediğini öğrenme',
        'Bilgi talep etme',
        'Amaca uygun kullanılıp kullanılmadığını öğrenme',
        'Aktarılan üçüncü kişileri bilme',
        'Düzeltme isteme',
        'Silinmesini talep etme',
        'İşlemenin kısıtlanmasını isteme',
        'İtiraz etme',
        'Tazminat talep etme'
      ]
    },
    retention: {
      title: 'Saklama Süresi',
      text: 'Mevzuatta öngörülen süre boyunca saklanır, süre dolunca imha edilir.'
    },
    updates: {
      title: 'Değişiklik ve Güncellemeler',
      text: 'Metin gerektiğinde güncellenir, web sitemizden erişebilirsiniz.'
    }
  },
  en: {
    title:
      'INFORMATION NOTICE UNDER THE LAW ON THE PROTECTION OF PERSONAL DATA NO. 6698',
    intro:
      'As Origami Software, we take the highest level of security measures to ensure that your personal data is collected, stored, and shared in compliance with the law, protecting your privacy. In accordance with Law No. 6698 on the Protection of Personal Data (KVKK), we transparently inform you about how your data is collected, processed, legal reasons and your rights.',
    definitions: {
      title: 'Definitions',
      personalData: {
        label: 'Personal Data',
        text: 'Any information relating to an identified or identifiable natural person.'
      },
      sensitiveData: {
        label: 'Sensitive Personal Data',
        text: 'Data such as race, ethnic origin, health information, etc.'
      },
      controller: { label: 'Data Controller', text: 'Origami Software.' }
    },
    collection: {
      title: 'Collection of Personal Data',
      text: 'Your data is collected via website, forms, e-mail, phone, social media, etc.'
    },
    processing: {
      title: 'Processing of Personal Data',
      text: 'Processed to provide services and fulfill legal obligations.'
    },
    transfer: {
      title: 'Transfer',
      text: 'May be shared with business partners and authorities when legally required.'
    },
    storage: {
      title: 'Storage',
      text: 'Data is stored securely on servers and protected.'
    },
    rights: {
      title: 'Your Rights under KVKK',
      items: [
        'Learn whether your data is processed',
        'Request information',
        'Learn the purpose of processing',
        'Know the third parties to whom it is transferred',
        'Request correction',
        'Request deletion',
        'Request restriction of processing',
        'Object to processing',
        'Request compensation'
      ]
    },
    retention: {
      title: 'Retention Period',
      text:
        'Stored as long as required by legislation, then deleted or anonymized.'
    },
    updates: {
      title: 'Changes and Updates',
      text:
        'This notice may be updated, latest version is available on our website.'
    }
  },
  ru: {
    title:
      'ИНФОРМАЦИОННОЕ УВЕДОМЛЕНИЕ В СООТВЕТСТВИИ С ЗАКОНОМ №6698 О ЗАЩИТЕ ПЕРСОНАЛЬНЫХ ДАННЫХ',
    intro:
      'Компания Origami Software принимает максимальные меры безопасности для сбора, хранения и передачи ваших персональных данных в соответствии с законодательством, защищая вашу конфиденциальность. В соответствии с Законом №6698 о защите персональных данных (KVKK) мы предоставляем вам прозрачную информацию о том, как ваши данные собираются, обрабатываются, правовые основания и ваши права.',
    definitions: {
      title: 'Определения',
      personalData: {
        label: 'Персональные данные',
        text:
          'Любая информация, относящаяся к определенному или идентифицируемому физическому лицу.'
      },
      sensitiveData: {
        label: 'Специальные категории данных',
        text:
          'Данные о расе, этническом происхождении, состоянии здоровья и т.д.'
      },
      controller: { label: 'Оператор данных', text: 'Origami Software.' }
    },
    collection: {
      title: 'Сбор персональных данных',
      text:
        'Ваши данные собираются через сайт, формы, электронную почту, телефон, социальные сети и др.'
    },
    processing: {
      title: 'Обработка персональных данных',
      text:
        'Обрабатываются для предоставления услуг и выполнения юридических обязательств.'
    },
    transfer: {
      title: 'Передача',
      text:
        'Может быть передана партнёрам и госорганам при юридической необходимости.'
    },
    storage: {
      title: 'Хранение',
      text: 'Данные хранятся на защищённых серверах и охраняются.'
    },
    rights: {
      title: 'Ваши права по KVKK',
      items: [
        'Узнать, обрабатываются ли ваши данные',
        'Запросить информацию',
        'Узнать цель обработки',
        'Узнать третьих лиц, которым переданы данные',
        'Требовать исправления',
        'Требовать удаления',
        'Ограничить обработку',
        'Возразить против обработки',
        'Требовать компенсацию'
      ]
    },
    retention: {
      title: 'Срок хранения',
      text:
        'Хранятся столько, сколько требуется законодательством, после чего удаляются или анонимизируются.'
    },
    updates: {
      title: 'Изменения и обновления',
      text:
        'Этот текст может быть обновлён, актуальная версия доступна на сайте.'
    }
  }
};

export default function KVKKPage() {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const read = () =>
      setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();
    const handler = () => read();
    window.addEventListener('locale-change', handler);
    return () => window.removeEventListener('locale-change', handler);
  }, []);

  const t = TEXTS[locale];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed bg-white shadow-md rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#0D152E]">
          {t.title}
        </h1>

        <p className="mb-6">{t.intro}</p>

        <h2 className="text-xl font-semibold mb-2">1- {t.definitions.title}</h2>
        <p className="mb-4">
          <strong>A - {t.definitions.personalData.label}:</strong>{' '}
          {t.definitions.personalData.text}
        </p>
        <p className="mb-4">
          <strong>B - {t.definitions.sensitiveData.label}:</strong>{' '}
          {t.definitions.sensitiveData.text}
        </p>
        <p className="mb-6">
          <strong>C - {t.definitions.controller.label}:</strong>{' '}
          {t.definitions.controller.text}
        </p>

        <h2 className="text-xl font-semibold mb-2">2- {t.collection.title}</h2>
        <p className="mb-6">{t.collection.text}</p>

        <h2 className="text-xl font-semibold mb-2">3- {t.processing.title}</h2>
        <p className="mb-6">{t.processing.text}</p>

        <h2 className="text-xl font-semibold mb-2">4- {t.transfer.title}</h2>
        <p className="mb-6">{t.transfer.text}</p>

        <h2 className="text-xl font-semibold mb-2">5- {t.storage.title}</h2>
        <p className="mb-6">{t.storage.text}</p>

        <h2 className="text-xl font-semibold mb-2">6- {t.rights.title}</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          {t.rights.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">7- {t.retention.title}</h2>
        <p className="mb-6">{t.retention.text}</p>

        <h2 className="text-xl font-semibold mb-2">8- {t.updates.title}</h2>
        <p>{t.updates.text}</p>
      </main>

      <Footer />
    </div>
  );
}
