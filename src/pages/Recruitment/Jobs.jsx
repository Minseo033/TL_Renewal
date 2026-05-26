import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { RECRUITMENT_JOBS } from '../../data/recruitmentJobsData';
import { 
  Search, AlertCircle, ChevronLeft, ChevronRight, 
  Users, MessageSquare, Lightbulb, BarChart3,
  CalendarDays, ClipboardList, FileText, Phone,
} from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

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

const COMMON_APPLICATION_INFO = [
  '지원방법: 당사 홈페이지 온라인 지원 또는 채용 사이트 접수',
  '제출서류: 이력서 및 자기소개서',
  '문의처: 태일씨앤티 채용담당자 (070-8897-0761)',
];

const COMMON_NOTICE = [
  '입사지원서를 허위로 작성하신 경우 입사가 취소될 수 있습니다.',
  '국가보훈대상자 및 장애인은 관련 법령에 의거하여 우대합니다.',
];

const toList = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'string') {
    return value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const itemsPerPage = 5;

  const filteredJobs = RECRUITMENT_JOBS.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedJob(null);
  };
  const selectJob = (job) => {
    setSelectedJob((current) => (current?.id === job.id ? null : job));
  };

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
                  setSelectedJob(null);
                }}
              />
            </div>
          </div>

          <div className="job-warning-box">
            <AlertCircle size={22} />
            입사지원서를 허위로 작성하신 경우 입사가 취소될 수 있습니다.
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
                  currentItems.map((job) => {
                    const isSelected = selectedJob?.id === job.id;
                    const detailId = `job-detail-${job.id}`;

                    return (
                      <React.Fragment key={job.id}>
                        <tr
                          className={isSelected ? 'selected' : ''}
                          onClick={() => selectJob(job)}
                          aria-expanded={isSelected}
                        >
                          <td>{job.id}</td>
                          <td className="title-cell">
                            <button
                              type="button"
                              aria-expanded={isSelected}
                              aria-controls={detailId}
                              onClick={(event) => {
                                event.stopPropagation();
                                selectJob(job);
                              }}
                            >
                              <span>{job.title}</span>
                              <ChevronRight className="job-title-arrow" size={16} />
                            </button>
                          </td>
                          <td>{job.date}</td>
                          <td>
                            <span className={`job-status-badge ${job.status === '접수중' ? 'active' : 'closed'}`}>
                              {job.status}
                            </span>
                          </td>
                        </tr>
                        {isSelected && (
                          <tr className="job-detail-row">
                            <td colSpan="4">
                              <JobDetailBoard id={detailId} job={job} />
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
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

function JobDetailBoard({ id, job }) {
  if (!job) {
    return (
      <article className="job-detail-board" id={id}>
        <div className="job-detail-empty">
          <FileText size={28} />
          <strong>공고를 선택해 주세요</strong>
          <p>목록에서 공고 제목을 누르면 상세 게시판이 표시됩니다.</p>
        </div>
      </article>
    );
  }

  const detail = job.detail || {};
  const duties = toList(detail.duties);
  const qualifications = toList(detail.qualifications);
  const preferred = toList(detail.preferred);
  const process = toList(detail.process);
  const applicationBase = toList(detail.application).length > 0 ? toList(detail.application) : COMMON_APPLICATION_INFO;
  const application = detail.contact && !applicationBase.some((item) => item.includes(detail.contact))
    ? [...applicationBase, `문의처: ${detail.contact}`]
    : applicationBase;
  const notice = toList(detail.notice).length > 0 ? toList(detail.notice) : COMMON_NOTICE;
  const hasCustomDetail = duties.length + qualifications.length + preferred.length + process.length > 0;

  return (
    <article className="job-detail-board" id={id}>
      <div className="job-detail-header">
        <div>
          <p className="section-eyebrow">JOB DETAIL</p>
          <h3>{job.title}</h3>
        </div>
        <span className={`job-status-badge ${job.status === '접수중' ? 'active' : 'closed'}`}>
          {job.status}
        </span>
      </div>

      <div className="job-detail-meta">
        <div>
          <span>공고번호</span>
          <strong>{job.id}</strong>
        </div>
        <div>
          <span>마감일</span>
          <strong>{job.date}</strong>
        </div>
        {detail.department && (
          <div>
            <span>모집부문</span>
            <strong>{detail.department}</strong>
          </div>
        )}
        {detail.career && (
          <div>
            <span>경력구분</span>
            <strong>{detail.career}</strong>
          </div>
        )}
        {detail.employmentType && (
          <div>
            <span>고용형태</span>
            <strong>{detail.employmentType}</strong>
          </div>
        )}
        {detail.workplace && (
          <div>
            <span>근무지</span>
            <strong>{detail.workplace}</strong>
          </div>
        )}
      </div>

      {detail.summary && <p className="job-detail-summary">{detail.summary}</p>}

      <div className="job-detail-grid">
        {duties.length > 0 && <DetailSection icon={<ClipboardList size={18} />} title="담당업무" items={duties} />}
        {qualifications.length > 0 && <DetailSection icon={<FileText size={18} />} title="자격요건" items={qualifications} />}
        {preferred.length > 0 && <DetailSection icon={<Users size={18} />} title="우대사항" items={preferred} />}
        {process.length > 0 && <DetailSection icon={<CalendarDays size={18} />} title="전형절차" items={process} />}
        <DetailSection icon={<FileText size={18} />} title="지원 안내" items={application} />
        <DetailSection icon={<AlertCircle size={18} />} title="유의사항" items={notice} />
      </div>

      {!hasCustomDetail && (
        <div className="job-detail-note">
          상세 직무, 자격요건, 우대사항은 관리자 페이지에서 공고별 확정 정보를 입력하면 이 영역에 추가로 표시됩니다.
        </div>
      )}

      <div className="job-detail-actions">
        <Link to="/recruitment/guide" className="btn btn-primary">
          <ClipboardList size={16} /> 채용가이드 보기
        </Link>
        <a className="btn btn-outline" href="tel:07088970761">
          <Phone size={16} /> 채용담당자 문의
        </a>
      </div>
    </article>
  );
}

function DetailSection({ icon, title, items }) {
  return (
    <section className="job-detail-section">
      <h4>{icon}{title}</h4>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
