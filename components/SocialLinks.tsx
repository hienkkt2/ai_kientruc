import React, { useState } from 'react';
import { Icon } from './icons';

export const SocialLinks: React.FC = () => {
    const [showDonate, setShowDonate] = useState(false);

    const qrUrl = "https://img.vietqr.io/image/TCB-8396869395-compact.png?accountName=DINH%20HIEN&addInfo=Donate%20AI%20Architecture";

    return (
        <div className="mt-4 pt-5 border-t border-slate-700 flex flex-col items-center gap-4">
            <div className="flex justify-center items-center gap-4">
                <a href="https://www.facebook.com/dinhien.marketing" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-300 hover:bg-blue-600/50 transition-all duration-300 shadow-lg">
                    <img src="https://raw.githubusercontent.com/Khanhltvpp1a/Media/main/fb.png" alt="Facebook" className="w-9 h-9" />
                </a>
                
                <a href="https://zalo.me/0943304685" target="_blank" rel="noopener noreferrer" title="Zalo" className="w-10 h-10 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-300 hover:bg-sky-500/50 transition-all duration-300 shadow-lg">
                    <img src="https://raw.githubusercontent.com/Khanhltvpp1a/Media/main/2048px-Icon_of_Zalo.svg.png" alt="Zalo" className="w-9 h-9" />
                </a>

                <button 
                    onClick={() => setShowDonate(!showDonate)}
                    title="Donate" 
                    className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 font-bold rounded-full hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <Icon name="heart" className="w-5 h-5" />
                    <span>Donate</span>
                </button>
            </div>

            {showDonate && (
                <div className="mt-4 p-4 bg-slate-800/90 backdrop-blur-md border border-amber-400/30 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-xs text-center">
                    <p className="text-amber-400 font-bold mb-2">Ủng hộ duy trì AI Architecture</p>
                    <div className="bg-white p-2 rounded-xl mb-3">
                        <img src={qrUrl} alt="QR Donate" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="text-slate-300 text-xs space-y-1">
                        <p>Ngân hàng: <span className="text-white font-semibold">Techcombank</span></p>
                        <p>Số tài khoản: <span className="text-white font-semibold">8396869395</span></p>
                        <p>Chủ tài khoản: <span className="text-white font-semibold">DINH HIEN</span></p>
                    </div>
                    <button 
                        onClick={() => setShowDonate(false)}
                        className="mt-3 text-slate-400 hover:text-white text-xs underline"
                    >
                        Đóng
                    </button>
                </div>
            )}
        </div>
    );
};
