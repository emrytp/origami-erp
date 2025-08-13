'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function KVKKPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* İçerik */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed bg-white shadow-md rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#0D152E]">
          6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA AYDINLATMA METNİ
        </h1>

        <p className="mb-6">
          Origami Yazılım olarak, kişisel verilerinizin hukuka uygun olarak toplanması, saklanması ve paylaşılması
          ile gizliliğinizi korumak amacıyla en üst seviyede güvenlik tedbirlerini almaktayız.
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca sizleri, kişisel verilerinizin
          alınma şekilleri, işlenme amaçları, hukuki nedenleri ve haklarınız konusunda şeffaf şekilde bilgilendiriyoruz.
        </p>

        <h2 className="text-xl font-semibold mb-2">1- Tanımlar</h2>
        <p className="mb-4">
          <strong>A - Kişisel Veri:</strong> Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade eder.
        </p>
        <p className="mb-4">
          <strong>B - Özel Nitelikli Kişisel Veri:</strong> Irk, etnik köken, siyasi düşünce, dini inanç, sağlık bilgileri gibi veriler.
        </p>
        <p className="mb-6">
          <strong>C - Veri Sorumlusu:</strong> KVKK uyarınca, kişisel verilerinizin işlenmesinden sorumlu olan Origami Yazılım’dır.
        </p>

        <h2 className="text-xl font-semibold mb-2">2- Kişisel Verilerin Toplanma Şekli</h2>
        <p className="mb-6">
          Kişisel verileriniz; web sitemiz, iletişim formlarımız, sözleşmeler, e-posta, telefon, sosyal medya ve
          diğer kanallar aracılığıyla otomatik veya manuel yollarla toplanmaktadır.
        </p>

        <h2 className="text-xl font-semibold mb-2">3- Kişisel Verilerinizin Ne Şekilde İşlenebileceği ve Amaçları</h2>
        <p className="mb-6">
          Kişisel verileriniz; hizmet sunmak, yasal yükümlülükleri yerine getirmek, müşteri ilişkilerini yönetmek
          ve geliştirmek gibi amaçlarla işlenmektedir.
        </p>

        <h2 className="text-xl font-semibold mb-2">4- İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
        <p className="mb-6">
          Kişisel verileriniz, yasal zorunluluklar ve hizmet ihtiyaçları çerçevesinde iş ortaklarımız, tedarikçilerimiz
          ve yetkili kurumlarla paylaşılabilir.
        </p>

        <h2 className="text-xl font-semibold mb-2">5- Kişisel Verilerin Saklanması ve Korunması</h2>
        <p className="mb-6">
          Verileriniz güvenli sunucularda saklanır, KVKK’nın öngördüğü teknik ve idari tedbirler alınır.
          Yetkisiz erişim, kayıp veya kötüye kullanımı önlemek için gerekli güvenlik önlemleri uygulanır.
        </p>

        <h2 className="text-xl font-semibold mb-2">6- KVKK Uyarınca Kişisel Veri Sahibinin Hakları</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Kişisel verinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel veriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>Silinmesini veya yok edilmesini isteme</li>
          <li>İşlemenin kısıtlanmasını talep etme</li>
          <li>Otomatik sistemler ile analiz edilmesine itiraz etme</li>
          <li>Verinin hukuka aykırı işlenmesi nedeniyle zarara uğraması halinde tazminat talep etme</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">7- Kişisel Verilerinizin Saklama Süresi</h2>
        <p className="mb-6">
          Kişisel verileriniz, ilgili mevzuatta öngörülen süreler boyunca saklanır. Süre dolduğunda güvenli şekilde
          imha edilir veya anonim hale getirilir.
        </p>

        <h2 className="text-xl font-semibold mb-2">8- Değişiklik ve Güncellemeler</h2>
        <p>
          Bu aydınlatma metni, gerektiğinde güncellenebilir. Güncel sürüme web sitemiz üzerinden erişebilirsiniz.
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
