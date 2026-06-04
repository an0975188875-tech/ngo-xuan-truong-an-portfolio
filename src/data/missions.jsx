import React from 'react';
import { Terminal, Cpu, Layout, MessageSquare } from 'lucide-react';

export const missions = [
  {
    id: 1,
    title: "Nhiệm vụ 1: Kiến trúc Dữ liệu",
    objective: "Thao tác cơ bản với tệp tin và thư mục",
    description: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp.",
    pdfUrl: "https://drive.google.com/file/d/1WMEjT3f05t1u4RjRIp4QfATTH2TG5T-1/preview",
  },
  {
    id: 2,
    title: "Nhiệm vụ 2: Khảo sát Nâng cao",
    objective: "Tìm kiếm và đánh giá thông tin học thuật",
    description: "Kết quả tìm kiếm học thuật bằng các toán tử nâng cao.",
    pdfUrl: "https://drive.google.com/file/d/1hi0RdjaCxBCLrX-vYM0mjna59abOcm35/preview",
  },
  {
    id: 3,
    title: "Nhiệm vụ 3: Giao tiếp AI",
    objective: "Viết Prompt hiệu quả",
    description: "So sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả.",
    pdfUrl: "https://drive.google.com/file/d/10cF8JaNJsA43dt0pExcE33B2ql-tyzdA/preview",
  },
  {
    id: 4,
    title: "Nhiệm vụ 4: Vận hành Tiếp sức",
    objective: "Sử dụng công cụ hợp tác trực tuyến",
    description: "Minh chứng sử dụng công cụ quản lý dự án nhóm.",
    pdfUrl: "https://drive.google.com/file/d/1vVnjMni3rOoLIJnkEaBKoTHrvPsI1kJo/preview",
  },
  {
    id: 5,
    title: "Nhiệm vụ 5: Khởi nguyên Số",
    objective: "Sáng tạo nội dung với AI",
    description: "Sản phẩm nội dung số hoàn thiện được hỗ trợ bởi AI.",
    pdfUrl: "https://drive.google.com/file/d/1bUQ5EdyCbbR4ovf1Y2dx9k-5Y2ZsYLew/preview",
  },
  {
    id: 6,
    title: "Nhiệm vụ 6: Vệ binh Đạo đức AI",
    objective: "Sử dụng AI có trách nhiệm",
    description: "Bộ nguyên tắc cá nhân về sử dụng AI dựa trên các nghiên cứu.",
    pdfUrl: "https://drive.google.com/file/d/1ipzi93S_T4NPLewGDEl2ft8e840PwwIt/preview",
  }
];

export const skills = [
  { 
    title: "C/C++", 
    description: "Xây dựng nền tảng tư duy logic, cấu trúc dữ liệu và thuật toán sâu sắc.",
    icon: <Cpu size={48} /> 
  },
  { 
    title: "Môi trường Linux", 
    description: "Thao tác thành thạo terminal Ubuntu, shell scripting và quản trị hệ thống.",
    icon: <Terminal size={48} /> 
  },
  { 
    title: "Prompt Engineering", 
    description: "Tối ưu hóa chỉ thị cho các mô hình ngôn ngữ lớn để phục vụ học thuật.",
    icon: <MessageSquare size={48} /> 
  },
  { 
    title: "UI/UX & Media", 
    description: "Sử dụng OBS Studio và thiết kế giao diện hướng trải nghiệm người dùng.",
    icon: <Layout size={48} /> 
  }
];