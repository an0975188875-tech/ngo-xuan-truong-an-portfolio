import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillCard from './components/SkillCard';
import PDFModal from './components/PDFModal';
import { missions, skills } from './data/missions';
import { Target, User, BookOpen } from 'lucide-react';

// COMPONENT: Màn hình Loading
const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
    >
      <div className="absolute inset-0 bg-duel-grid bg-grid-size opacity-30"></div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 h-64 md:w-96 md:h-96 mb-8 rounded-full overflow-hidden border-2 border-neonBlue shadow-[0_0_50px_rgba(34,211,238,0.4)]"
        >
           <img 
    src="/yugi.jpg" 
    alt="Loading Icon"
    className="w-full h-full object-cover"
/>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl md:text-6xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-white to-purpleGlow drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] uppercase"
        >
          CHÀO MỪNG ĐẾN VỚI PORTFOLIO CỦA TÔI
        </motion.h1>
        
        <motion.div 
          className="w-48 h-1 bg-white/10 mt-8 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            className="h-full bg-neonBlue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5, ease: "linear" }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// COMPONENT CHÍNH: App
function App() {
  const [selectedMission, setSelectedMission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-dark text-white bg-duel-grid bg-grid-size font-sans">
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* SECTION 1: HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo/10 to-dark/90 z-0"></div>
        <div className="z-10 mt-10">
          <div className="animate-pulse mb-6 text-neonBlue font-mono text-sm border border-neonBlue/30 inline-block px-4 py-1 rounded-full bg-neonBlue/10">
            KÍCH HOẠT HỒ SƠ NĂNG LỰC SỐ
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            NGÔ XUÂN <span className="text-neonBlue">TRƯỜNG AN</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Kết nối sức mạnh giữa Phần cứng, Phần mềm và Trí tuệ Nhân tạo.
          </p>
          <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-neonBlue font-mono">06</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-50">Nhiệm Vụ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purpleGlow font-mono">LV.18</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-50">Tuổi Đời</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DUELIST PROFILE */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-10 border-b border-indigo/30 pb-4">
          <User className="text-neonBlue" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">HỒ SƠ CÁ NHÂN</h2>
        </div>
        
        <div className="bg-slate/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue to-purpleGlow rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-neonBlue via-indigo to-purpleGlow relative z-10">
              <img 
                src="/avatar.jpg" 
                alt="Avatar Ngô Xuân Trường An" 
                className="w-full h-full object-cover rounded-full border-4 border-dark bg-dark"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Trường+An&background=0D8ABC&color=fff&size=256";
                }}
              />
            </div>
          </div>

          <div className="text-gray-300 leading-relaxed text-center md:text-left">
            <p className="mb-6 text-lg">
              Xin chào, tôi là <strong className="text-white text-xl">Ngô Xuân Trường An</strong>, hiện đang là sinh viên ngành <strong>Kỹ thuật Máy tính</strong> tại Trường Đại học Công nghệ - Đại học Quốc gia Hà Nội (UET - VNU).
            </p>
            <p className="mb-6">
              Định hướng phát triển của tôi là trở thành một Kỹ sư có khả năng làm chủ toàn diện hệ thống công nghệ. Quá trình học tập của tôi là sự kết hợp chặt chẽ giữa tư duy logic của lập trình (C/C++, Python), sự linh hoạt của môi trường hệ điều hành (Linux Ubuntu) và khả năng thao tác thực tế với các phần cứng điện tử.
            </p>
            <p>
              Không chỉ dừng lại ở các khối mã lệnh, tôi còn đam mê việc ứng dụng công cụ kỹ thuật số (như OBS Studio) và Trí tuệ Nhân tạo (AI) vào việc sáng tạo nội dung, tối ưu hóa quy trình học thuật, cũng như xây dựng nền tảng vững chắc để sẵn sàng bước vào các môi trường làm việc chuyên nghiệp trong tương lai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILL DECK */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-neonBlue pl-4">KỸ NĂNG CỐT LÕI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* SECTION 4: PROJECT ARCHIVES */}
      <section className="py-20 px-6 md:px-10 bg-slate/30 backdrop-blur-sm border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-right border-r-4 border-purpleGlow pr-4">LƯU TRỮ NHIỆM VỤ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((m) => (
              <div 
                key={m.id}
                onClick={() => setSelectedMission(m)}
                className="p-6 border border-white/10 rounded-xl hover:border-neonBlue/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all cursor-pointer group bg-dark/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 to-purpleGlow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-indigo/20 rounded-lg text-neonBlue group-hover:scale-110 transition-transform">
                      <Target size={24}/>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-black/50 px-2 py-1 rounded">NHIỆM_VỤ_0{m.id}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-neonBlue transition-colors mb-2">{m.title}</h3>
                  <p className="text-sm text-neonBlue/70 font-medium mb-2">{m.objective}</p>
                  <p className="text-sm text-gray-400 line-clamp-2">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: REFLECTION */}
      <section className="py-24 px-6 md:px-10 max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-10 border-b border-purpleGlow/50 pb-4 justify-end">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-right">TỔNG KẾT HÀNH TRÌNH</h2>
          <BookOpen className="text-purpleGlow" size={32} />
        </div>
        
        <div className="bg-dark/80 backdrop-blur-md border border-indigo/40 rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(139,92,246,0.1)] text-gray-300">
          <h3 className="text-xl font-bold text-neonBlue mb-4">Nhìn lại chặng đường học tập</h3>
          <p className="mb-6 leading-relaxed">
            Học phần "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo" không chỉ cung cấp cho tôi những kiến thức bề mặt, mà còn là bước đệm thay đổi hoàn toàn tư duy tiếp cận công nghệ. Từ việc quản lý dữ liệu số một cách có hệ thống, đến việc biến AI thành một "trợ lý học thuật" đắc lực thông qua kỹ năng Prompt Engineering.
          </p>
          
          <h3 className="text-xl font-bold text-neonBlue mb-4 mt-8">Sự trưởng thành và thách thức</h3>
          <p className="mb-6 leading-relaxed">
            Thách thức lớn nhất trong quá trình xây dựng Portfolio này và thực hiện các nhiệm vụ là việc phải dung hòa giữa tư duy kỹ thuật khô khan và khả năng trình bày thông tin trực quan. Quá trình giải quyết bài toán đạo đức AI (AI Ethics) và bảo mật thông tin cũng rèn luyện cho tôi tư duy phản biện sắc bén hơn trước những luồng dữ liệu khổng lồ trên Internet.
          </p>

          <h3 className="text-xl font-bold text-neonBlue mb-4 mt-8">Định hướng tương lai</h3>
          <p className="leading-relaxed">
            Những kỹ năng số và công cụ AI được trang bị từ học phần này sẽ là nền tảng cốt lõi để tôi tối ưu hóa hiệu suất lập trình, nghiên cứu vi mạch và chuẩn bị hồ sơ năng lực chuyên nghiệp. Đây là minh chứng rõ nét cho tinh thần học hỏi không ngừng và sự sẵn sàng thích nghi với môi trường làm việc số hóa cường độ cao.
          </p>
        </div>
      </section>

      {/* PDF MODAL */}
      <PDFModal 
        isOpen={!!selectedMission} 
        onClose={() => setSelectedMission(null)}
        pdfUrl={selectedMission?.pdfUrl}
        missionTitle={selectedMission?.title}
      />

      {/* FOOTER */}
      <footer className="py-12 text-center relative z-10 border-t border-white/10 bg-dark/50">
         <p className="text-gray-500 font-mono tracking-widest text-sm mb-6">SẴN SÀNG CHINH PHỤC THỬ THÁCH</p>
         <div className="flex justify-center gap-8">
            {/* GITHUB */}
            <a 
              href="https://github.com/Ten-Tai-Khoan-Cua-Ban" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neonBlue transition-colors font-mono text-sm tracking-wider"
            >
              GITHUB
            </a>
            
            {/* EMAIL */}
            <a 
              href="mailto:25020438@vnu.edu.vn" 
              className="text-gray-400 hover:text-neonBlue transition-colors font-mono text-sm tracking-wider"
            >
              EMAIL
            </a>
         </div>
      </footer>
    </div>
  );
}

export default App;