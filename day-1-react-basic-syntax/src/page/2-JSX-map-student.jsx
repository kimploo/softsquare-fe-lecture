import { countries } from '../sampleData.mjs';
import { countryCodeEmoji } from '../util/getCountryCodeEmoji.mjs';
import s from './page.module.css'

export default function Page() {
  // 여러 개의 엘리먼트를 표시할 때는 map 함수를 사용합니다.
  return (
    <div className={s.appContainer}>
      {/* 국가 목록 */}
      {/* .map() 메서드를 사용한 원리는 간단합니다. 단순히 배열에 있는 요소의 정보를 JSX로 1:1 "mapping" 하는 것 */}
      {/* React는 같은 컴포넌트를 다시 렌더링하지 않기 위해 key 속성을 주는 것을 권장 (사실, 본인이 전문 FE 개발자라면 MUST) */}
      {/* {[<span>hello</span>, <span>world</span>, <span>JavaScript</span>, <span>React</span>]} */}
      
      {/* 코드를 조금씩 변형해보면서 내가 문법에 대해서 정확하게 알고 있는지 계속 치열하게 확인을 해봐야 한다. */}
      {countries.map((country, idx) => {
        const { name, code, capital } = country

        return (
          <article key={idx + name} className={s.countryContainer}>
          <div>
            <span>국가 </span>
            <span>{countryCodeEmoji(code)}</span>
            <span>{name}</span>
          </div>
          <div>
            <span>수도 </span>
            <span>{capital.name}</span>
          </div>
        </article>
        
        )
      })}
    </div>
  )
}
