import styles from './page.module.css';

const testimonials = [
  {
    quote: '我家狗子以前进洗护店就发抖，这次居然愿意跟美容师贴贴。洗完蓬松到像刚出炉的小面包。',
    owner: 'Lucky 家长',
    pet: '柯基 · 3 岁',
    tag: '敏感犬安抚',
  },
  {
    quote: '猫咪分区很加分，洗前还会问敏感点，回家没有应激。指甲剪得也很圆滑。',
    owner: '年糕家长',
    pet: '布偶猫 · 2 岁',
    tag: '猫咪分区洗护',
  },
  {
    quote: '美容师会边洗边发照片，吹毛时还特意避开耳朵。接回家以后香味很清爽，不会冲鼻。',
    owner: '豆包家长',
    pet: '柴犬 · 4 岁',
    tag: '过程透明',
  },
  {
    quote: '第一次做造型就剪到了我想要的圆脸效果，细节很干净，脚底毛和肚皮也修得很仔细。',
    owner: 'Momo 家长',
    pet: '比熊 · 1 岁',
    tag: '精修造型',
  },
  {
    quote: '老年犬站久了会累，店里给它垫了防滑垫，中途还安排休息。护理完精神状态很好。',
    owner: '可乐家长',
    pet: '金毛 · 9 岁',
    tag: '老年犬友好',
  },
  {
    quote: '临时加了接送服务，沟通很顺。到店前后都会确认皮肤情况，护理建议也写得很清楚。',
    owner: '芝麻家长',
    pet: '英短 · 5 岁',
    tag: '接送到店',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
  <div className="page-shell">
    <div className="bubble one"></div>
    <div className="bubble two"></div>

    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="返回爪爪泡泡屋首页">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M17 23c3.4 0 6 2.8 7 5 1-2.2 3.6-5 7-5 4.8 0 8 3.6 8 8.1 0 5.3-4.3 8.9-10.1 8.9H19.1C13.3 40 9 36.4 9 31.1 9 26.6 12.2 23 17 23Z" fill="currentColor"/>
              <circle cx="14" cy="16" r="5" fill="currentColor"/>
              <circle cx="24" cy="11" r="5" fill="currentColor"/>
              <circle cx="34" cy="16" r="5" fill="currentColor"/>
            </svg>
          </span>
          爪爪泡泡屋
        </a>
        <nav className="nav-links" aria-label="页面导航">
          <a href="#services">服务</a>
          <a href="#process">流程</a>
          <a href="#pricing">套餐</a>
          <a href="#contact">联系</a>
          <a className="btn" href="#contact">预约洗护</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <span className="eyebrow"><span className="dot"></span>一宠一浴巾 · 透明护理 · 温柔吹护</span>
          <h1 id="hero-title">让毛孩子洗完澡，也像放了个小假。</h1>
          <p className="hero-copy">爪爪泡泡屋提供猫狗洗澡、基础美容、皮毛护理和到店接送服务。我们用低刺激产品、独立消毒工具和耐心安抚流程，让敏感小朋友也能安心变香。</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">立即预约</a>
            <a className="btn secondary" href="#services">查看服务</a>
          </div>
          <div className="trust-row" aria-label="店铺数据">
            <div className="trust-item">
              <strong>4.9</strong>
              <span>顾客评分</span>
            </div>
            <div className="trust-item">
              <strong>30min</strong>
              <span>护理状态同步</span>
            </div>
            <div className="trust-item">
              <strong>1:1</strong>
              <span>专属美容师服务</span>
            </div>
          </div>
        </div>

        <div className="pet-card" aria-label="洗护后的宠物插画">
          <span className="soap a"></span>
          <span className="soap b"></span>
          <span className="soap c"></span>
          <div className="pet-portrait" role="img" aria-label="一只刚洗完澡的开心小狗">
            <img src="/assets/images/pet-poodle.png" alt="刚洗护完成的蓬松小型犬" />
          </div>
          <div className="floating-note">
            <span className="mini-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M6 13.5 10 17l8-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <strong>今日可约：15:30 / 17:00</strong>
              <span>支持小型犬、中大型犬和猫咪分区洗护</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-title">
        <div className="section-head">
          <h2 id="services-title">不是简单冲一冲，是一套舒服的皮毛管理。</h2>
          <p>从基础清洁到造型修剪，每个项目都包含皮肤观察、耳眼清洁和护理建议。</p>
        </div>
        <div className="grid services">
          <article className="card">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 20h10M8 16h8a3 3 0 0 0 3-3V8H5v5a3 3 0 0 0 3 3ZM7 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <h3>精致洗澡</h3>
            <p>温水冲洗、低敏香波、护毛素、吹干梳理，减少打结和浮毛。</p>
          </article>
          <article className="card">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 18 15 7m0 0 5-3-3 5m-2-2 2 2M6 16l2 2m8-4 4 4M4 4l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3>美容造型</h3>
            <p>圆脸、泰迪装、短毛清爽造型，按宠物性格和毛量定制。</p>
          </article>
          <article className="card">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z" stroke="currentColor" strokeWidth="2"/><path d="M9.5 10.5h5M12 8v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <h3>皮毛护理</h3>
            <p>针对干燥、掉毛、敏感皮肤，提供药浴建议和护理记录。</p>
          </article>
          <article className="card">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17h11l3-5h2a2 2 0 0 1 2 2v3h-2M4 17V7h11v10M7 19.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3>接送服务</h3>
            <p>3 公里内可预约接送，到店、洗护、返程节点都会发送提醒。</p>
          </article>
        </div>
      </section>

      <section className="showcase" aria-labelledby="showcase-title">
        <div className="section-head">
          <h2 id="showcase-title">店内环境安静明亮，洗护分区更放心。</h2>
          <p>接待、洗护、猫咪安静区各自独立，动线清楚，减少宠物等待和陌生气味带来的压力。</p>
        </div>
        <div className="showcase-carousel" aria-label="店内环境轮播图">
          <div className="showcase-track">
            <figure className="showcase-slide">
              <img src="/assets/images/interior-reception.png" alt="高端宠物洗护店接待与零售区" />
              <figcaption className="showcase-caption">
                <strong>接待与零售区</strong>
                <span>暖木、石材和柔和灯光，让到店第一步更像进入安静的护理会所。</span>
              </figcaption>
            </figure>
            <figure className="showcase-slide">
              <img src="/assets/images/interior-grooming.png" alt="高端宠物洗护店洗护与吹干区" />
              <figcaption className="showcase-caption">
                <strong>洗护与吹干区</strong>
                <span>独立浴缸、护理台和低噪吹干设备，保持卫生，也照顾敏感宠物的情绪。</span>
              </figcaption>
            </figure>
            <figure className="showcase-slide">
              <img src="/assets/images/interior-cat-lounge.png" alt="高端宠物洗护店猫咪安静护理区" />
              <figcaption className="showcase-caption">
                <strong>猫咪安静区</strong>
                <span>玻璃分区、软垫和猫爬架组合，给猫咪留出观察和放松的安全距离。</span>
              </figcaption>
            </figure>
          </div>
          <div className="showcase-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section aria-labelledby="pets-title">
        <div className="section-head">
          <h2 id="pets-title">每只毛孩子洗完，都要有蓬松发光的证件照。</h2>
          <p>补上真实服务感的宠物照片，让访客一眼看到小型犬、猫咪和中大型犬的护理效果。</p>
        </div>
        <div className="grid pet-gallery">
          <article className="card photo-card">
            <figure>
              <div className="photo">
                <img src="/assets/images/pet-poodle.png" alt="洗护后蓬松干净的小型犬" />
              </div>
              <figcaption>
                <h3>小型犬精致洗护</h3>
                <p>圆脸梳理、蓬松吹干和基础清洁一次完成，干净但不紧张。</p>
              </figcaption>
            </figure>
          </article>
          <article className="card photo-card">
            <figure>
              <div className="photo">
                <img src="/assets/images/pet-ragdoll.png" alt="护理后安静放松的长毛猫" />
              </div>
              <figcaption>
                <h3>猫咪轻柔护理</h3>
                <p>分区安抚、低刺激清洁和顺毛梳理，照顾怕水小朋友的节奏。</p>
              </figcaption>
            </figure>
          </article>
          <article className="card photo-card">
            <figure>
              <div className="photo">
                <img src="/assets/images/pet-golden.png" alt="洗护后毛发顺亮的中大型犬" />
              </div>
              <figcaption>
                <h3>中大型犬全身护理</h3>
                <p>针对毛量和体型安排洗护时长，吹透底毛，减少潮湿和浮毛。</p>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section id="process" className="split" aria-labelledby="process-title">
        <div className="feature-panel">
          <h2 id="process-title">我们把“害怕洗澡”拆成更轻松的小步骤。</h2>
          <p>洗护前先熟悉环境，洗护中持续安抚，洗护后给出皮毛和耳爪状态反馈。小朋友舒服，家长也更放心。</p>
          <ul className="check-list">
            <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>独立工具包和洗护台消毒</span></li>
            <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>猫狗分区，减少陌生气味压力</span></li>
            <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg><span>洗后拍照记录，护理建议可追踪</span></li>
          </ul>
        </div>
        <div className="steps">
          <article className="step">
            <span className="step-number">01</span>
            <div>
              <h3>到店评估</h3>
              <p>确认体型、毛发打结、皮肤状态和是否怕水，避免一上来就“开洗”。</p>
            </div>
          </article>
          <article className="step">
            <span className="step-number">02</span>
            <div>
              <h3>温和清洁</h3>
              <p>按宠物皮毛状态选择香波，水温、吹风温度和风量都逐步适应。</p>
            </div>
          </article>
          <article className="step">
            <span className="step-number">03</span>
            <div>
              <h3>修剪护理</h3>
              <p>清理脚底毛、指甲、耳眼和肛门腺，可选局部或全身造型。</p>
            </div>
          </article>
          <article className="step">
            <span className="step-number">04</span>
            <div>
              <h3>状态反馈</h3>
              <p>交付洗护照片、皮毛建议和下次护理周期，家长不用猜。</p>
            </div>
          </article>
        </div>
      </section>

      <section id="pricing" aria-labelledby="pricing-title">
        <div className="section-head">
          <h2 id="pricing-title">清楚的套餐，少一点套路，多一点安心。</h2>
          <p>价格会根据体型、毛量和打结程度微调，到店评估后先确认再服务。</p>
        </div>
        <div className="grid pricing">
          <article className="card price-card">
            <span className="tag">基础清洁</span>
            <h3>清爽洗护</h3>
            <div className="price">¥88 <small>起</small></div>
            <p>适合日常洗澡和轻度浮毛护理。</p>
            <ul>
              <li>温和香波洗澡</li>
              <li>吹干梳毛</li>
              <li>耳眼基础清洁</li>
            </ul>
          </article>
          <article className="card price-card featured">
            <span className="tag">推荐套餐</span>
            <h3>香香全护理</h3>
            <div className="price">¥168 <small>起</small></div>
            <p>洗澡、修剪、护理一次搞定，适合大多数家庭。</p>
            <ul>
              <li>基础洗护全部项目</li>
              <li>脚底毛和指甲修剪</li>
              <li>护毛素和护理建议</li>
            </ul>
          </article>
          <article className="card price-card">
            <span className="tag">造型美容</span>
            <h3>精修造型</h3>
            <div className="price">¥268 <small>起</small></div>
            <p>适合泰迪、比熊、雪纳瑞等需要造型的宠物。</p>
            <ul>
              <li>全身洗护</li>
              <li>定制造型修剪</li>
              <li>洗后定妆拍照</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="reviews" aria-labelledby="reviews-title">
        <div className="section-heading compact">
          <span className="eyebrow"><span className="dot"></span>真实到店反馈</span>
          <h2 id="reviews-title">让家长放心的，不只是洗得香。</h2>
          <p>从胆小敏感到精修造型，每一只小朋友都会被认真记录、温柔照顾。</p>
        </div>
        <div className="reviews-carousel" aria-label="顾客评价轮播">
          <div className="reviews-track">
            {[...testimonials, ...testimonials].map((review, index) => (
              <article className="quote" key={`${review.owner}-${index}`} aria-hidden={index >= testimonials.length}>
                <div className="quote-top">
                  <span className="quote-tag">{review.tag}</span>
                  <span className="stars" aria-label="五星评价">★★★★★</span>
                </div>
                <p>“{review.quote}”</p>
                <div className="quote-author">
                  <strong>{review.owner}</strong>
                  <span>{review.pet}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="contact-info">
          <h2 id="contact-title">预约一次，让小家伙香香软软回家。</h2>
          <p>填写信息后，我们会在营业时间内联系你确认宠物情况和可预约时段。</p>
          <div className="info-list">
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v14H4V5Zm0 4h16M8 3v4m8-4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>营业时间：周一至周日 10:00 - 20:00</span>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
              <span>地址：阳光街 88 号宠物友好社区 1F</span>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 4h3l1.4 4-2 1.4a12.5 12.5 0 0 0 5.6 5.6l1.4-2 4 1.4v3A2.6 2.6 0 0 1 17.3 20 13.3 13.3 0 0 1 4 6.7 2.6 2.6 0 0 1 6.6 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              <span>电话：188-0000-6688</span>
            </div>
          </div>
        </div>
        <div className="form-card">
          <form>
            <label>
              你的称呼
              <input type="text" name="name" placeholder="例如：小王" autoComplete="name" />
            </label>
            <label>
              联系电话
              <input type="tel" name="phone" placeholder="请输入手机号" autoComplete="tel" />
            </label>
            <label>
              期望到店时间
              <input type="datetime-local" name="arrivalTime" aria-label="期望到店时间" />
            </label>
            <label>
              宠物类型
              <select name="pet">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他小宠</option>
              </select>
            </label>
            <label>
              想预约的服务
              <textarea name="message" placeholder="例如：比熊全身洗护和圆脸造型，周六下午比较方便。"></textarea>
            </label>
            <button className="btn" type="button">提交预约信息</button>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      © 2026 爪爪泡泡屋 Paw Spa. 为每一只毛孩子认真洗香香。
    </footer>
  </div>
    </div>
  );
}
