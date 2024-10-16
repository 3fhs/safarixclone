import { languages, currencies } from "../../data";
import "./footer.css";
import FooterIcon from "./FooterIcon";
import SelectBox from "./SelectBox";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item select-box-wrapper">
        <SelectBox items={languages} label=" اللغات " />
        <SelectBox items={currencies} label=" العملات " />
      </div>
      <div className="footer-item">
  <h3 className="footer-item-title">الدعم</h3>
  <ul className="footer-item-list">
    <li className="footer-item-link">الاتصال بنا</li>
    <li className="footer-item-link">الإشعار القانوني</li>
    <li className="footer-item-link">سياسة الخصوصية</li>
    <li className="footer-item-link">الشروط العامة</li>
    <li className="footer-item-link">خريطة الموقع</li>
  </ul>
</div>

<div className="footer-item">
  <h3 className="footer-item-title">الشركة</h3>
  <ul className="footer-item-list">
    <li className="footer-item-link">معلومات عنا</li>
    <li className="footer-item-link">الوظائف</li>
    <li className="footer-item-link">المدونة</li>
    <li className="footer-item-link">الصحافة</li>
    <li className="footer-item-link">بطاقات الهدايا</li>
    <li className="footer-item-link">المجلة</li>
    <li className="footer-item-link">أدلة السفر</li>
  </ul>
</div>

<div className="footer-item">
  <h3 className="footer-item-title">العمل معنا</h3>
  <ul className="footer-item-list">
    <li className="footer-item-link">كن مورداً</li>
    <li className="footer-item-link">كن شريكاً تابعاً</li>
  </ul>
  <FooterIcon />
  <div className="footer-copy-right">حقوق الطبع والنشر &copy; 2024 MO-Safari</div>
</div>

    </footer>
  );
};

export default Footer;
