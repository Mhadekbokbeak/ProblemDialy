## 📝 Learning Note (Day 1)
```
          การออกแบบระบบตรวจสอบ (Validation Flow) ที่ดี ควรดึงและตรวจสอบข้อมูลให้สำเร็จก่อนนำไปคำนวณเสมอ ระวังการดึง Property จากตัวแปรชนิด String และอย่าลืมทำ Sanitize Input (trim(), toUpperCase()) เพื่อป้องกัน Edge Cases จากผู้ใช้งาน
```

### Bug
```
          การดึง Property มั่วจาก object from string
          let coupon = couponList[clenCode] คือการเช็คแล้วว่ามีอยู่ไหม
           if (coupon && coupon.expired !== true && coupon.minSpend <= cartTotal)
```