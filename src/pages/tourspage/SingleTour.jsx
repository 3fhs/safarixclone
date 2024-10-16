import React from "react";
import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import BookNow from "./BookNow";
import RatingFile from "../../componenents/rating/RatingFile";
import "./SingleTour.css";

function SingleTour() {
  const { id } = useParams();

  const tour = toursList.find((t) => t.id === +id);

  return (
    <div className="sfari">
      <section className="tour">
        <div className="tour-step">
          مصر <i className="bi bi-chevron-right"></i>
          سياحة فى مصر <i className="bi bi-chevron-right"></i> سياحة
        </div>
        <div className="tour-category"> مغامرة </div>
        <h1 className="tour-title">  مصر {tour.title} :</h1>
        <div className="tour-info">
          <RatingFile rating={tour.rating} reviews={tour.reviews} />
          <div className="tour-provider">
            مقدم النشاط : <span>  محمد عبد الغنى  </span>
          </div>
        </div>
        <div className="tour-img-wrapper">
          <img src={tour.image} alt={tour.title} className="tour-img" />
          {/* <BookNow priceFrom={tour.priceFrom} /> */}
        </div>
        <p className="tour-description">
          اكتشف التاريخ القديم من مصر , مصر صانعة حضارة قديما و حديثا , و لازالت تكتب تاريخها متحدية فى ذلك كل الظروف و العقبات ,
          استمتع بمجموعات واسعة من الرحلات فى مختلف الانشطة
        </p>
        <div className="tour-more-information">
          <h2 className="tour-info-title"> عن هذا النشاط </h2>
          <div className="tour-info-item">
            <div className="tour-info-item-title">
              <i style={{ color: "#27ae60" }} className="bi bi-calendar3"></i>
              إلغاء مجاني
            </div>
            <p className="tour-info-item-desc">
              يمكنك الإلغاء حتى 24 ساعة مقدماً لاسترداد كامل المبلغ.
            </p>
          </div>
          <div className="tour-info-item">
            <div className="tour-info-item-title">
              <i
                style={{ color: "#2980b9" }}
                className="bi bi-calendar-plus-fill"
              ></i>
              احجز الآن وادفع لاحقاً
            </div>
            <p className="tour-info-item-desc">
              حافظ على مرونة خطط سفرك - احجز مكانك اليوم بدون دفع.
            </p>
          </div>
          <div className="tour-info-item">
            <div className="tour-info-item-title">
              <i style={{ color: "#e74c3c" }} className="bi bi-virus"></i>
              احتياطات كوفيد-19
            </div>
            <p className="tour-info-item-desc">
              توجد تدابير صحية وسلامة خاصة . راجع قسيمة النشاط عند الحجز للحصول
              على التفاصيل الكاملة.
            </p>
          </div>
          <div className="tour-info-item">
            <div className="tour-info-item-title">
              <i style={{ color: "#8e44ad" }} className="bi bi-clock-history"></i>
              المدة: 4 - 7 ساعات
            </div>
            <p className="tour-info-item-desc">
              تحقق من التوفر لمعرفة أوقات البداية.
            </p>
          </div>
          <div className="tour-info-item">
            <div className="tour-info-item-title">
              <i style={{ color: "#2c3e50" }} className="bi bi-person-check"></i>
              مرشد سياحي مباشر
            </div>
            <p className="tour-info-item-desc">اللغة الإنجليزية</p>
          </div>
        </div>
      </section>
      <div className="tour-img-wrapper">
        <BookNow priceFrom={tour.priceFrom} />
      </div>
    </div>
  );
}

export default SingleTour;
