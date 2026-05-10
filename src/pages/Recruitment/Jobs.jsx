import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { 
  Search, AlertCircle, ChevronLeft, ChevronRight, 
  Users, MessageSquare, Lightbulb, BarChart3 
} from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

// 사진의 내용으로 업데이트된 인재상 데이터
const VALUES = [
  { 
    icon: <BarChart3 size={32} />, 
    title: '책임과 성장', 
    desc: '책임과 배움을 반복하며 성장한다' 
  },
  { 
    icon: <MessageSquare size={32} />, 
    title: '정직과 소통', 
    desc: '원칙에 따라 정직하게 소통하여 신뢰를 만든다' 
  },
  { 
    icon: <Users size={32} />, 
    title: '공동체 의식', 
    desc: '공동체를 강화하여 함께 어려움을 극복한다' 
  },
  { 
    icon: <Lightbulb size={32} />, 
    title: '더 나은 방식', 
    desc: '관심있게 관찰하고 더 나은 방식을 찾는다' 
  },
];

const DUMMY_JOBS = [
  { id: 224, title: '본사 경영기획실 재무회계(팀장급) 경력사원 모집', date: '2024-10-26', status: '접수마감' },
  { id: 223, title: '철근콘크리트 공사 현장공무 및 시공관리 신입/경력 채용', date: '상시채용', status: '접수중' },
  { id: 222, title: '안전보건팀 현장 안전관리자 경력사원 모집', date: '2024-09-15', status: '접수마감' },
  { id: 221, title: '2024년 상반기 공무팀 신입 사원 모집', date: '2024-05-30', status: '접수마감' },
  { id: 220, title: '현장 노무 관리 경력직 모집', date: '2024-04-12', status: '접수마감' },
  { id: 219, title: '본사 자재팀 계약직 채용 공고', date: '2024-03-20', status: '접수마감' },
  { id: 218, title: '현장 시공직 채용 (충청 지역)', date: '상시채용', status: '접수중' },
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredJobs = DUMMY_JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '채용공고' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="section-eyebrow">TALENT RECRUITMENT</p>
          <h2 className="section-title">함께 성장할 인재를 기다립니다</h2>
          <p className="section-subtitle">사람을 세우고 내일을 건설하는 태일씨앤티의 비전에 동참할 인재를 찾습니다.</p>
        </div>
      </AnimatedSection>

      {/* 업데이트된 인재상 그리드 */}
      <div className="talent-values-grid mb-24">
        {VALUES.map((v, idx) => (
          <AnimatedSection key={idx} delay={idx * 100}>
            <div className="talent-value-card">
              <div className="talent-value-icon" style={{color: '#63b155'}}>{v.icon}</div>
              <h3 className="talent-value-title">{v.title}</h3>
              <p className="talent-value-desc">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={300}>
        <div className="job-list-container">
          <div className="job-list-header">
            <h3><Search size={24} /> 현재 진행중인 공고</h3>
            <div className="job-search-wrapper">
              <Search size={18} color="#64748b" />
              <input 
                type="text" 
                placeholder="공고 제목으로 검색하세요" 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="job-warning-box">
            <AlertCircle size={22} />
            입사지원서를 허위로 작성한 경우 입사가 취소될 수 있습니다.
          </div>

          <div className="job-table-wrapper">
            <table className="job-table">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>번호</th>
                  <th style={{width: '60%'}}>제목</th>
                  <th style={{width: '15%'}}>마감일</th>
                  <th style={{width: '15%'}}>상태</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((job) => (
                    <tr key={job.id}>
                      <td>{job.id}</td>
                      <td className="title-cell">{job.title}</td>
                      <td>{job.date}</td>
                      <td>
                        <span className={`job-status-badge ${job.status === '접수중' ? 'active' : 'closed'}`}>
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{padding: '60px', color: '#94a3b8'}}>검색 결과가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={18} />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                className="page-btn" 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}