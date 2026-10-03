# Solved
```
          Use forEach to loop Read each tags from every task and Array MAP() method to filter tag ตัวพิมเล็ก เอาแบบเฉพาะ เพราะบางที่ คนเพิ่ม tag ซ้ำขื้นมา
          และรู้จักการสร้าง key object แบบซ้อนให้สร้าง key ก่อนแล้วค่อยกำหนด value หรือการสร้าง object ซ้อน
```

# Learned pass

```
          - Technique ใช้ การตัดค่าซ้ำโดยการใช้ new Set + ... เพื่อเอาข้อมูลเดิมด้วย
          - Dynamic Object Key Allocation การสร้าง key ใน object แบบ dynamic ด้วย if (!obj[key]) obj[key] = initialValue
```

# Note
```
          การทำ Data Aggregation / Grouping ควรใช้ Set ช่วยตัดข้อมูลซ้ำในระดับ Item ก่อนนำไปนับรวม และต้องระวังเรื่อง Scope ของตัวแปรเมื่อมี Loop ซ้อนกัน รวมถึงการเขียน Code ป้องกันกรณี Property เป็น undefined เพื่อไม่ให้ระบบ Crash =>  if (!task.tags || task.tags.length === 0) (id: 5, title: "Refactor True", completed: true, ! )

```