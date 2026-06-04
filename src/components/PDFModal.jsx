import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PDFModal = ({ isOpen, onClose, pdfUrl, missionTitle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-5xl h-[85vh] bg-slate rounded-2xl border border-neonBlue/30 overflow-hidden flex flex-col shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-indigo/30 bg-slate/50">
              <h2 className="text-lg font-bold text-neonBlue font-mono">{missionTitle}</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* PDF Iframe */}
            <div className="flex-grow w-full bg-gray-100 flex items-center justify-center relative">
              {pdfUrl ? (
                <iframe 
                  src={`${pdfUrl}#toolbar=0`} 
                  className="w-full h-full border-none absolute inset-0"
                  title={missionTitle}
                />
              ) : (
                <div className="text-gray-500 font-mono flex flex-col items-center">
                  <span>// PDF_LINK_NOT_FOUND</span>
                  <span className="text-sm mt-2">Vui lòng cập nhật link Google Drive Preview vào file missions.js</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PDFModal;