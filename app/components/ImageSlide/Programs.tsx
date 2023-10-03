interface IProgramProps {}

const Program: React.FC<IProgramProps> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-[95%] relative z-10 -top-20">
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
        <div>
          <div>
            <span className="p-2 text-[14px] bg-[#F3E8FF] text-[#6B21A8] rounded-lg">
              Nổi bật
            </span>
          </div>
          <div className="mt-2">
            <h4 className="text-dark-jungle-green">Tính ứng dụng thực tế</h4>
            <p className="text-independence mt-2">
              Chương trình đào tạo của chúng tôi nhấn mạnh việc áp dụng kiến
              thức vào thực tế
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full p-3 rounded-lg border-2 border-blue-berry text-blue-berry hover:bg-blue-berry hover:text-white transition-all duration-300">
            Khám phá
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
        <div>
          <div>
            <span className="p-2 text-[14px] bg-[#DBEAFE] text-[#1E40AF] rounded-lg">
              Tin cậy
            </span>
          </div>
          <div className="mt-2">
            <h4 className="text-dark-jungle-green">Chất lượng giáo dục</h4>
            <p className="text-independence mt-2">
              Chương trình đào tạo của chúng tôi đảm bảo chất lượng giáo dục
              theo chuẩn của Bộ Giáo Dục Việt Nam.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full p-3 rounded-lg border-2 border-blue-berry text-blue-berry hover:bg-blue-berry hover:text-white transition-all duration-300">
            Khám phá
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
        <div>
          <div>
            <span className="p-2 text-[14px] bg-[#DCFCE7] text-[#166534] rounded-lg">
              Linh hoạt
            </span>
          </div>
          <div className="mt-2">
            <h4 className="text-dark-jungle-green">
              Sự linh hoạt và cá nhân hóa
            </h4>
            <p className="text-independence mt-2">
              Chương trình của chúng tôi được thiết kế linh hoạt và có thể tùy
              chỉnh để phù hợp với từng học sinh, giúp tiến bộ theo cách tốt
              nhất.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full p-3 rounded-lg border-2 border-blue-berry text-blue-berry hover:bg-blue-berry hover:text-white transition-all duration-300">
            Khám phá
          </button>
        </div>
      </div>
    </div>
  );
};

export default Program;
