import React from 'react';
import { Sparkles } from 'lucide-react';

const AnimatedBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl p-[3px] shadow-md bg-gray-200 ${className}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_75%,#3b82f6_90%,#ef4444_100%)]" />
      <div className="relative z-10 h-full w-full rounded-lg bg-white flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
};

const Node = ({ title, subtitle, className = "" }: { title: string, subtitle?: string, className?: string }) => (
  <div className={`w-full h-full bg-gray-50 rounded-xl p-4 flex flex-col justify-center shadow-sm border border-gray-200 relative overflow-hidden group hover:border-blue-300 transition-colors ${className}`}>
    <div className="font-medium text-gray-800 relative z-10">{title}</div>
    {subtitle && <div className="text-sm text-gray-500 mt-1 relative z-10">{subtitle}</div>}
    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm whitespace-nowrap">
    {children}
  </div>
);

const ArrowRight = () => (
  <div className="w-full relative h-full flex items-center">
    <div className="w-full h-[2px] bg-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide" style={{ transform: 'translateX(-100%)' }}></div>
    </div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
  </div>
);

const ArrowDown = () => (
  <div className="h-full w-full relative flex justify-center">
    <div className="h-full w-[2px] bg-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-slide-down" style={{ transform: 'translateY(-100%)' }}></div>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 border-b-2 border-r-2 border-gray-300 transform rotate-45"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 font-sans overflow-x-auto">
      
      <svg width="0" height="0" className="absolute">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#d1d5db" />
          </marker>
        </defs>
      </svg>

      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Zhiyou 4.5 Pro Development Roadmap</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Alur pemrosesan informasi dan pelatihan model AI LLM dari pengumpulan data hingga tahap fine-tuning.
        </p>
      </div>

      <div className="flex justify-center w-full min-w-[1200px] px-8">
        <div className="grid grid-cols-[12rem_16rem_4rem_16rem_6rem_18rem] gap-y-0">
          
          {/* Top Node */}
          <div className="col-start-2 flex justify-center mb-2">
            <AnimatedBorder className="w-full h-20">
              <div className="text-center font-semibold text-gray-800">
                Zhiyou 4.5 Pro Pipeline
              </div>
            </AnimatedBorder>
          </div>

          {/* Top Arrow */}
          <div className="col-start-2 h-10">
            <ArrowDown />
          </div>

          {/* Row 1 */}
          <div className="h-[100px] flex items-center justify-end pr-8"><Label>Information Input</Label></div>
          <div className="h-[100px] flex items-center"><Node title="Raw Data Collection" subtitle="Text, Code, Images" /></div>
          <div className="h-[100px] flex items-center justify-center"><ArrowRight /></div>
          <div className="h-[100px] flex items-center"><Node title="Tokenization & Vectorization" subtitle="Data Cleaning, Deduplication" /></div>
          <div className="h-[100px] relative">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <path d="M 0 50 L 48 50 L 48 190 L 96 190" fill="none" stroke="#e5e7eb" strokeWidth="2" className="animated-path" markerEnd="url(#arrowhead)" />
            </svg>
          </div>
          <div className="row-span-5 flex items-center pl-4">
            <AnimatedBorder className="w-full h-[220px]">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="font-bold text-xl text-gray-900 mb-2">Zhiyou 4.5 Pro</div>
                <div className="text-sm text-gray-500 mb-4">(Instruct & Chat Model)</div>
                <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
              </div>
            </AnimatedBorder>
          </div>

          {/* Arrow Row 1->2 */}
          <div className="col-start-2 h-10"><ArrowDown /></div>

          {/* Row 2 */}
          <div className="h-[100px] flex items-center justify-end pr-8"><Label>Core Learning</Label></div>
          <div className="h-[100px] flex items-center"><Node title="Pre-training Phase" subtitle="Next-Token Prediction" /></div>
          <div className="h-[100px] flex items-center justify-center"><ArrowRight /></div>
          <div className="h-[100px] flex items-center"><Node title="Neural Network Weights" subtitle="Self-Attention Mechanism" /></div>
          <div className="h-[100px] relative">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <path d="M 0 50 L 96 50" fill="none" stroke="#e5e7eb" strokeWidth="2" className="animated-path" markerEnd="url(#arrowhead)" />
            </svg>
          </div>

          {/* Arrow Row 2->3 */}
          <div className="col-start-2 h-10"><ArrowDown /></div>

          {/* Row 3 */}
          <div className="h-[100px] flex items-center justify-end pr-8"><Label>Refinement</Label></div>
          <div className="h-[100px] flex items-center"><Node title="Supervised Fine-Tuning" subtitle="Instruction Following" /></div>
          <div className="h-[100px] flex items-center justify-center"><ArrowRight /></div>
          <div className="h-[100px] flex items-center"><Node title="RLHF & DPO" subtitle="Human Feedback Alignment" /></div>
          <div className="h-[100px] relative">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <path d="M 0 50 L 48 50 L 48 -90 L 96 -90" fill="none" stroke="#e5e7eb" strokeWidth="2" className="animated-path" markerEnd="url(#arrowhead)" />
            </svg>
          </div>

          {/* Bottom Arrow */}
          <div className="col-start-2 h-12 mt-2"><ArrowDown /></div>

          {/* Bottom Node */}
          <div className="col-start-2 flex justify-center mt-2">
            <AnimatedBorder className="w-full h-20">
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-semibold text-gray-800">
                  Zhiyou 4.5 Base Model
                </div>
                <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
              </div>
            </AnimatedBorder>
          </div>

        </div>
      </div>
    </div>
  );
}
