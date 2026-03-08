import "../styles/AboutCompany.css";
import logo from "../assets/humma.png";

const AboutCompanyPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Tentang Perusahaan</h1>

      {/* ================= IDENTITAS PERUSAHAAN ================= */}
      <section className="about-card">
        <h2>Identitas Perusahaan</h2>

        <div className="company-profile">
          <img src={logo} alt="Logo Perusahaan" className="company-logo" />

          <div className="company-info">
            <p><strong>Nama Perusahaan:</strong> PT Hummatech Indonesia</p>
            <p><strong>Tahun Berdiri:</strong> 2018</p>
            <p><strong>Alamat:</strong> Jl. Teknologi No. 12, Jakarta</p>
            <p><strong>Bidang Usaha:</strong> Teknologi Informasi & Digital Solution</p>
            <p><strong>Email:</strong> info@hummatech.com</p>
            <p><strong>Telepon:</strong> (021) 1234-5678</p>
            <p><strong>Website:</strong> www.hummatech.com</p>
          </div>
        </div>
      </section>

      {/* ================= SEJARAH PERUSAHAAN ================= */}
      <section className="about-card">
        <h2>Sejarah Singkat Perusahaan</h2>

        <p>
          PT Hummatech Indonesia didirikan pada tahun 2018 dengan tujuan
          membantu perusahaan dan institusi dalam mengembangkan solusi
          teknologi yang inovatif dan efisien.
        </p>

        <p>
          Perusahaan ini lahir dari keinginan untuk menjawab tantangan
          transformasi digital di Indonesia, khususnya di bidang sistem
          informasi dan pengembangan aplikasi.
        </p>

        <p>
          Seiring berjalannya waktu, Hummatech terus berkembang dan dipercaya
          oleh berbagai klien untuk membangun sistem berbasis web dan digital
          yang modern, aman, dan mudah digunakan.
        </p>
      </section>
    </div>
  );
};

export default AboutCompanyPage;
