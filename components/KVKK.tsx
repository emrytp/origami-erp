'use client';

import React, {useEffect, useState} from 'react';

type Locale = 'tr' | 'en' | 'ru';

// Cookie okuyucu
function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

// Metinler
const TEXTS: Record<Locale, {
  title: string;
  intro: string;
  defs: { a: string; b: string; c: string };
  collectTitle: string;
  collect: string;
  processTitle: string;
  process: string;
  shareTitle: string;
  share: string;
  protectTitle: string;
  protect: string;
  rightsTitle: string;
  rights: string[];
  retentionTitle: string;
  retention: string;
  updateTitle: string;
  update: string;
}> = {
  tr: {
    title:
      '6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA AYDINLATMA METNİ',
    intro:
      'Origami Yazılım olarak, kişisel verilerinizin hukuka uygun olarak toplanması, saklanması ve paylaşılması ile gizliliğinizi korumak amacıyla en üst seviyede güvenlik tedbirlerini almaktayız. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca sizleri, kişisel verilerinizin alınma şekilleri, işlenme amaçları, hukuki nedenleri ve haklarınız konusunda şeffaf şekilde bilgilendiriyoruz.',
    defs: {
      a: 'A - Kişisel Veri: Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi.',
      b: 'B - Özel Nitelikli Kişisel Veri: Irk, etnik köken, siyasi düşünce, dini inanç, sağlık bilgileri gibi veriler.',
      c: 'C - Veri Sorumlusu: KVKK uyarınca, kişisel verilerinizin işlenmesinden sorumlu olan Origami Yazılım’dır.',
    },
    collectTitle: '2- Kişisel Verilerin Toplanma Şekli',
    collect:
      'Kişisel verileriniz; web sitemiz, iletişim formlarımız, sözleşmeler, e‑posta, telefon, sosyal medya ve diğer kanallar aracılığıyla otomatik veya manuel yollarla toplanmaktadır.',
    processTitle:
      '3- Kişisel Verilerinizin Ne Şekilde İşlenebileceği ve Amaçları',
    process:
      'Kişisel verileriniz; hizmet sunmak, yasal yükümlülükleri yerine getirmek, müşteri ilişkilerini yönetmek ve geliştirmek gibi amaçlarla işlenmektedir.',
    shareTitle:
      '4- İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği',
    share:
      'Kişisel verileriniz, yasal zorunluluklar ve hizmet ihtiyaçları çerçevesinde iş ortaklarımız, tedarikçilerimiz ve yetkili kurumlarla paylaşılabilir.',
    protectTitle: '5- Kişisel Verilerin Saklanması ve Korunması',
    protect:
      'Verileriniz güvenli sunucularda saklanır, KVKK’nın öngördüğü teknik ve idari tedbirler alınır. Yetkisiz erişim, kayıp veya kötüye kullanımı önlemek için gerekli güvenlik önlemleri uygulanır.',
    rightsTitle: '6- KVKK Uyarınca Kişisel Veri Sahibinin Hakları',
    rights: [
      'Kişisel verinizin işlenip işlenmediğini öğrenme',
      'Kişisel veriniz işlenmişse buna ilişkin bilgi talep etme',
      'İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
      'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme',
      'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
      'Silinmesini veya yok edilmesini isteme',
      'İşlemenin kısıtlanmasını talep etme',
      'Otomatik sistemler ile analiz edilmesine itiraz etme',
      'Hukuka aykırı işleme nedeniyle zarara uğrarsa tazminat talep etme',
    ],
    retentionTitle: '7- Kişisel Verilerinizin Saklama Süresi',
    retention:
      'Kişisel verileriniz, ilgili mevzuatta öngörülen süreler boyunca saklanır. Süre dolduğunda güvenli şekilde imha edilir veya anonim hale getirilir.',
    updateTitle: '8- Değişiklik ve Güncellemeler',
    update:
      'Bu aydınlatma metni, gerektiğinde güncellenebilir. Güncel sürüme web sitemiz üzerinden erişebilirsiniz.',
  },
  en: {
    title:
      'PRIVACY NOTICE UNDER THE TURKISH PERSONAL DATA PROTECTION LAW (KVKK)',
    intro:
      'As Origami Software, we take the highest level of security measures to collect, store and share your personal data lawfully and to protect your privacy. Pursuant to Law No. 6698 on the Protection of Personal Data (“KVKK”), we transparently inform you about the methods of collection, purposes of processing, legal grounds and your rights.',
    defs: {
      a: 'A - Personal Data: Any information relating to an identified or identifiable natural person.',
      b: 'B - Special Categories of Personal Data: Data such as race, ethnic origin, political opinion, religious belief, health information, etc.',
      c: 'C - Data Controller: Under KVKK, the data controller responsible for processing your personal data is Origami Software.',
    },
    collectTitle: '2- Methods of Collecting Personal Data',
    collect:
      'Your personal data may be collected via our website, contact forms, contracts, e‑mail, phone, social media and other channels, both automatically and manually.',
    processTitle: '3- Purposes and Manner of Processing Personal Data',
    process:
      'Your data are processed to provide services, fulfill legal obligations and manage/improve customer relationships.',
    shareTitle:
      '4- Transfer of Personal Data and Purposes of Transfer',
    share:
      'Your data may be shared with our business partners, suppliers and authorized authorities where required by law or service needs.',
    protectTitle: '5- Storage and Protection of Personal Data',
    protect:
      'Your data are stored on secure servers and technical/administrative safeguards required by KVKK are implemented to prevent unauthorized access, loss or misuse.',
    rightsTitle: '6- Your Rights under KVKK',
    rights: [
      'To learn whether your personal data are processed',
      'If processed, to request information regarding processing',
      'To learn the purpose of processing and whether they are used accordingly',
      'To know the third parties to whom data are transferred domestically/abroad',
      'To request correction if incomplete or inaccurate',
      'To request deletion or destruction',
      'To request restriction of processing',
      'To object to being analyzed exclusively by automated systems',
      'To claim compensation if you suffer damage due to unlawful processing',
    ],
    retentionTitle: '7- Retention Period',
    retention:
      'Your data are retained for the periods stipulated by applicable legislation and are securely destroyed or anonymized thereafter.',
    updateTitle: '8- Changes and Updates',
    update:
      'This notice may be updated when necessary. You can always access the current version on our website.',
  },
  ru: {
    title:
      'УВЕДОМЛЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ В СООТВЕТСТВИИ С ЗАКОНОМ KVKK №6698',
    intro:
      'Компания Origami Software принимает максимальные меры безопасности для законного сбора, хранения и передачи ваших персональных данных и защиты конфиденциальности. В соответствии с Законом №6698 о защите персональных данных (KVKK) мы прозрачно информируем о способах сбора, целях обработки, правовых основаниях и ваших правах.',
    defs: {
      a: 'A - Персональные данные: любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу.',
      b: 'B - Особые категории данных: данные о расе, этническом происхождении, политических взглядах, религиозных убеждениях, состоянии здоровья и т. п.',
      c: 'C - Оператор данных: в соответствии с KVKK оператором ваших персональных данных является Origami Software.',
    },
    collectTitle: '2- Способы сбора персональных данных',
    collect:
      'Данные собираются через наш сайт, формы обратной связи, договоры, e‑mail, телефон, социальные сети и иные каналы — автоматически и вручную.',
    processTitle: '3- Цели и порядок обработки персональных данных',
    process:
      'Данные обрабатываются для предоставления услуг, исполнения юридических обязанностей и управления/улучшения взаимоотношений с клиентами.',
    shareTitle: '4- Передача персональных данных и цели передачи',
    share:
      'Данные могут передаваться партнёрам, поставщикам и уполномоченным органам — при необходимости законами или оказанием услуг.',
    protectTitle: '5- Хранение и защита персональных данных',
    protect:
      'Данные хранятся на защищённых серверах; применяются технические и административные меры KVKK для предотвращения несанкционированного доступа, утраты или злоупотребления.',
    rightsTitle: '6- Ваши права по KVKK',
    rights: [
      'Узнать, обрабатываются ли ваши данные',
      'Запросить информацию об обработке',
      'Узнать цель обработки и соответствие использованию',
      'Узнать третьих лиц, которым передаются данные в Турции/за рубежом',
      'Требовать исправления неверных/неполных данных',
      'Требовать удаления или уничтожения',
      'Требовать ограничения обработки',
      'Возражать против автоматизированного профилирования',
      'Требовать компенсацию убытков при незаконной обработке',
    ],
    retentionTitle: '7- Срок хранения',
    retention:
      'Данные хранятся в сроки, предусмотренные законодательством, после чего безопасно уничтожаются или анонимизируются.',
    updateTitle: '8- Изменения и обновления',
    update:
      'Настоящий документ может обновляться при необходимости. Актуальная версия доступна на нашем сайте.',
  },
};

export default function KVKK() {
  const [locale, setLocale] = useState<Locale>('tr');

  // Cookie -> locale senkronu (Header butonuyla aynı mantık)
  useEffect(() => {
    const read = () =>
      setLocale(((getCookie('NEXT_LOCALE') as Locale) || 'tr'));
    read();

    // Eğer Header'da custom event tetikliyorsan (locale-change), burada yakala:
    const onLocaleChange = () => read();
    window.addEventListener('locale-change', onLocaleChange);
    return () => window.removeEventListener('locale-change', onLocaleChange);
  }, []);

  const t = TEXTS[locale];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-8">{t.title}</h1>

      <p className="mb-6">{t.intro}</p>

      {/* 1 */}
      <h2 className="text-xl font-semibold mb-2">1- Tanımlar</h2>
      <p className="mb-3"><strong>{t.defs.a.split(':')[0]}:</strong> {t.defs.a.split(': ')[1]}</p>
      <p className="mb-3"><strong>{t.defs.b.split(':')[0]}:</strong> {t.defs.b.split(': ')[1]}</p>
      <p className="mb-6"><strong>{t.defs.c.split(':')[0]}:</strong> {t.defs.c.split(': ')[1]}</p>

      {/* 2 */}
      <h2 className="text-xl font-semibold mb-2">{t.collectTitle}</h2>
      <p className="mb-6">{t.collect}</p>

      {/* 3 */}
      <h2 className="text-xl font-semibold mb-2">{t.processTitle}</h2>
      <p className="mb-6">{t.process}</p>

      {/* 4 */}
      <h2 className="text-xl font-semibold mb-2">{t.shareTitle}</h2>
      <p className="mb-6">{t.share}</p>

      {/* 5 */}
      <h2 className="text-xl font-semibold mb-2">{t.protectTitle}</h2>
      <p className="mb-6">{t.protect}</p>

      {/* 6 */}
      <h2 className="text-xl font-semibold mb-2">{t.rightsTitle}</h2>
      <ul className="list-disc pl-6 mb-6">
        {t.rights.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      {/* 7 */}
      <h2 className="text-xl font-semibold mb-2">{t.retentionTitle}</h2>
      <p className="mb-6">{t.retention}</p>

      {/* 8 */}
      <h2 className="text-xl font-semibold mb-2">{t.updateTitle}</h2>
      <p className="mb-6">{t.update}</p>
    </div>
  );
}
