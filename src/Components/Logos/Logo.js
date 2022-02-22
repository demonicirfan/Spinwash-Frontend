import { Center } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Center
      display={{ base: 'none', xs: 'flex' }}
      width={{ base: '10rem', lg: '16rem' }}
    >
      <Link to='/'>
        <svg
          viewBox='0 0 214 34'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.73592 0.221418C5.06271 0.691578 3.72138 1.75635 3.02997 3.16682C2.69809 3.83058 2.65661 4.10714 2.65661 5.19957C2.64278 7.82692 3.59692 8.85021 8.20171 11.1319C10.995 12.5285 11.6311 12.9434 11.9215 13.6624C12.4746 14.9623 11.9077 16.3451 10.5248 17.0642C9.69516 17.4928 8.00812 17.5481 6.94335 17.1748C5.69881 16.7323 4.30216 15.5154 3.45864 14.1464C3.41716 14.0773 1.3291 15.6399 1.3291 15.7366C1.3291 15.9717 2.62895 17.5896 3.20974 18.0736C4.92443 19.5117 6.47319 20.0925 8.5889 20.0925C11.4237 20.1064 13.5532 18.9586 14.5765 16.8844C14.9084 16.193 14.9499 15.9717 14.9499 14.6027C14.9499 13.2199 14.9222 13.0125 14.5765 12.3764C13.8298 10.9521 12.5852 10.0394 9.14203 8.38005C7.81452 7.73013 6.5285 7.01106 6.26576 6.74832C5.03506 5.60058 5.43607 3.63698 7.02632 2.98706C7.74538 2.69666 9.32179 2.65518 10.11 2.91792C10.912 3.18065 11.7694 3.81675 12.2949 4.50816C12.5299 4.84003 12.7788 5.1166 12.8342 5.13043C12.9863 5.13043 14.8669 3.6923 14.8807 3.56784C14.8807 3.4987 14.6595 3.16682 14.3829 2.80729C13.7053 1.90846 12.1704 0.802202 11.1333 0.428843C9.97172 0.0278244 7.80069 -0.0689735 6.73592 0.221418Z'
            fill='white'
          />
          <path
            d='M73.5127 9.90106V19.7882H74.9647H76.4166L76.4443 13.0539L76.4858 6.31956L77.6612 7.74387C78.3111 8.51824 79.8045 10.3297 80.9799 11.754C82.1553 13.1783 84.2157 15.6536 85.5432 17.2715L87.9632 20.1892L88.5578 20.2031H89.1385V10.385C89.1385 4.97823 89.1524 0.525551 89.18 0.456409C89.1939 0.401096 88.5716 0.345785 87.7972 0.318129L86.3729 0.276644L86.3453 7.09394L86.3038 13.9112L84.2849 11.4913C83.1786 10.1638 80.9108 7.42582 79.2514 5.4069C77.592 3.38799 75.9188 1.35524 75.5316 0.885084C74.854 0.0692215 74.7987 0.0277367 74.1764 0.0277367L73.5127 0.0139084V9.90106Z'
            fill='white'
          />
          <path
            d='M114.113 5.84931C111.015 13.5931 110.835 14.0494 110.697 13.8143C110.642 13.7037 110.047 12.1273 109.397 10.302C108.734 8.49049 107.655 5.5036 106.991 3.67828L105.802 0.359518L104.226 0.318033C102.995 0.290377 102.677 0.318033 102.718 0.456314C102.746 0.553112 104.419 5.04727 106.438 10.4264L110.089 20.2168L110.697 20.1753L111.306 20.1338L112.868 16.1928C113.739 14.0218 115.012 10.8136 115.717 9.04362C116.422 7.27361 117.044 5.87696 117.1 5.93228C117.155 5.98759 118.469 9.20956 120.017 13.0815L122.825 20.1338H123.433H124.055L125.59 16.0545C126.434 13.8143 128.052 9.45847 129.199 6.37478C130.347 3.29109 131.343 0.663738 131.384 0.525455C131.481 0.304205 131.37 0.290377 129.918 0.318033L128.342 0.359518L126.517 5.40681C125.507 8.18627 124.387 11.2561 124.041 12.2241C123.682 13.1921 123.35 13.9388 123.295 13.8835C123.239 13.8282 122.133 11.1317 120.833 7.89588C119.533 4.66008 118.303 1.5764 118.081 1.05093L117.694 0.0829544L117.072 0.0414696L116.45 -1.52588e-05L114.113 5.84931Z'
            fill='white'
          />
          <path
            d='M148.351 1.97762C147.895 3.07005 146.415 6.54093 145.074 9.69375C143.719 12.8466 142.225 16.3589 141.741 17.5067C141.257 18.6406 140.856 19.6224 140.856 19.6777C140.856 19.733 141.52 19.7883 142.35 19.7883H143.83L144.576 17.9907C144.991 16.995 145.392 16.1377 145.489 16.0547C145.572 15.9856 147.37 15.9441 149.914 15.9579L154.187 15.9856L155.003 17.88L155.819 19.7883H157.34C158.501 19.7883 158.847 19.7468 158.792 19.6086C158.722 19.4288 156.745 14.7549 153.343 6.78983C152.099 3.85826 150.937 1.1341 150.771 0.746916C150.467 0.0140209 150.467 0.0140209 149.831 0.0140209H149.195L148.351 1.97762ZM151.49 9.3757C152.334 11.4361 153.025 13.1923 153.025 13.2614C153.025 13.3997 146.886 13.4965 146.678 13.3582C146.54 13.2753 146.567 13.2061 148.462 8.54601C149.167 6.81749 149.803 5.4485 149.859 5.50381C149.914 5.55912 150.661 7.30148 151.49 9.3757Z'
            fill='white'
          />
          <path
            d='M175.745 0.221495C173.269 0.899076 171.734 2.6276 171.582 4.92308C171.486 6.36121 171.79 7.26004 172.689 8.24185C173.67 9.30662 174.555 9.8874 177.39 11.2702C180.197 12.6392 180.889 13.1785 181.027 14.1603C181.317 16.0409 179.838 17.4376 177.556 17.4376C175.841 17.4376 174.251 16.5664 173.007 14.9485L172.371 14.1188L171.762 14.5475C171.43 14.7826 170.96 15.1559 170.711 15.3634L170.255 15.7367L170.587 16.276C171.361 17.5206 172.979 18.9034 174.348 19.498C175.634 20.0373 177.072 20.2309 178.621 20.0649C181.691 19.7192 183.807 17.7003 183.972 14.9623C184.138 12.0999 182.977 10.7862 178.248 8.44927C175.275 6.98348 174.694 6.54098 174.514 5.61449C174.307 4.50823 174.901 3.42964 175.966 3.01479C177.805 2.26807 179.976 2.86268 181.179 4.43909C181.47 4.81245 181.746 5.1305 181.801 5.1305C181.857 5.1305 182.341 4.7848 182.88 4.35612L183.862 3.59557L183.627 3.1669C182.922 1.95002 180.626 0.442747 179.036 0.152355C178.012 -0.0412407 176.602 0.000244141 175.745 0.221495Z'
            fill='white'
          />
          <path
            d='M29.1245 10.0395V19.7883H30.5073H31.8901L31.9178 15.875L31.9593 11.9754L34.9324 11.8924C38.0852 11.8095 38.4309 11.7542 39.6616 11.0213C41.5422 9.915 42.524 7.96523 42.3581 5.68358C42.2198 3.66466 41.1965 2.03294 39.5095 1.1341C38.1405 0.401211 37.2693 0.290585 32.9687 0.290585H29.1245V10.0395ZM37.2693 3.13919C39.0255 3.65084 39.8967 5.42084 39.2882 7.23234C39.1638 7.57804 38.8734 8.06203 38.6383 8.29711C37.7948 9.16828 37.615 9.20977 34.6281 9.25125L31.8901 9.30656V6.19522C31.8901 4.49435 31.9316 3.05622 31.9869 3.01474C32.0284 2.95942 33.0794 2.91794 34.3101 2.91794C35.928 2.91794 36.7438 2.97325 37.2693 3.13919Z'
            fill='white'
          />
          <path
            d='M55.8125 10.0395V19.7883H57.2645H58.7164V10.0395V0.290585H57.2645H55.8125V10.0395Z'
            fill='white'
          />
          <path
            d='M198.09 0.359726C198.077 0.401211 198.077 0.55332 198.077 0.705431C198.077 0.85754 198.077 5.21342 198.09 10.3852L198.104 19.7883H199.487H200.87L200.898 15.2527L200.939 10.7309L205.89 10.6894L210.826 10.6479V15.225V19.7883H212.278H213.73V10.0395V0.290585H212.278H210.826V4.23162V8.18648L205.89 8.145L200.939 8.10351L200.898 4.19013L200.87 0.290585H199.487C198.727 0.290585 198.104 0.318241 198.09 0.359726Z'
            fill='white'
          />
          <path
            d='M9.76467 26.8269C8.6999 27.1588 7.67661 28.1268 7.40005 29.0671C7.31708 29.3437 7.26176 30.0351 7.28942 30.6159C7.34473 31.5147 7.41387 31.7498 7.75958 32.2614C7.99466 32.5795 8.45099 33.0358 8.76904 33.2709C9.28068 33.6166 9.51576 33.6857 10.4008 33.7272C11.7559 33.7963 12.475 33.5336 13.2217 32.6901C14.5492 31.169 14.4524 28.998 12.9866 27.6151C12.1569 26.8408 10.8156 26.5089 9.76467 26.8269ZM12.1708 27.9194C13.36 28.7352 13.6919 30.3116 12.9728 31.6945C12.1293 33.3262 9.91678 33.5751 8.6999 32.1923C8.22974 31.653 7.967 30.9339 7.967 30.1595C7.967 29.4958 8.53396 28.3342 9.03177 27.9747C9.97209 27.3109 11.2443 27.2833 12.1708 27.9194Z'
            fill='white'
          />
          <path
            d='M38.6659 26.8821C38.4032 26.9651 37.8639 27.3522 37.4629 27.7394C36.9097 28.2787 36.7023 28.5968 36.5226 29.2329C36.0109 31.0167 36.8683 32.8973 38.5 33.5749C39.2467 33.893 40.5742 33.8377 41.3071 33.4781C42.0123 33.1186 42.5378 32.6761 42.5378 32.4272C42.5378 32.3442 42.441 32.1921 42.3304 32.0953C42.1506 31.9432 42.04 31.9847 41.6666 32.3304C41.0444 32.925 40.7125 33.0633 39.9105 33.0633C39.0116 33.0633 38.4308 32.8144 37.8777 32.1921C36.4534 30.5742 37.2554 27.9745 39.3158 27.5182C39.9381 27.3799 40.1317 27.3799 40.6987 27.6012C41.0582 27.7394 41.5284 28.0298 41.722 28.2511C42.0815 28.6244 42.0953 28.6244 42.3995 28.3894L42.7038 28.1405L42.0815 27.5873C41.1273 26.7438 39.8966 26.4949 38.6659 26.8821Z'
            fill='white'
          />
          <path
            d='M53.5306 26.8686C51.1798 27.7121 50.3916 30.7266 52.0371 32.6349C52.7285 33.4508 53.4338 33.755 54.623 33.755C56.1303 33.755 57.278 33.0221 57.8588 31.6946C58.1354 31.0309 58.1215 29.5512 57.8312 28.846C57.1536 27.2419 55.1208 26.3016 53.5306 26.8686ZM56.1303 27.8919C56.7387 28.2929 57.3333 29.3991 57.3333 30.1597C57.3333 31.3766 56.559 32.6073 55.5772 32.9391C54.8581 33.1742 53.7103 33.0359 53.1296 32.6349C51.7467 31.6946 51.5532 29.4406 52.7562 28.2376C53.655 27.3387 55.0655 27.2004 56.1303 27.8919Z'
            fill='white'
          />
          <path
            d='M84.1883 26.9375C83.4969 27.2832 83.1926 27.7396 83.1926 28.5001C83.1926 29.3989 83.483 29.717 84.9903 30.4914C85.6679 30.8509 86.2901 31.2519 86.3731 31.404C86.6082 31.8465 86.5252 32.372 86.1657 32.7177C85.5158 33.3815 84.0915 33.0911 83.4277 32.1784C83.2756 31.971 83.2203 31.971 82.9852 32.1369C82.7363 32.3305 82.7363 32.3582 82.9576 32.7039C83.8979 34.142 86.5529 34.142 87.1475 32.7039C87.6453 31.5146 87.2166 30.7818 85.4881 29.8691C84.05 29.1085 83.7458 28.749 84.0085 28.1129C84.2436 27.546 84.8935 27.3247 85.6817 27.5321C85.9859 27.6151 86.3178 27.8087 86.4146 27.947C86.6082 28.2789 86.8294 28.2927 87.0645 28.0161C87.2996 27.7396 86.9401 27.3109 86.1657 26.9652C85.4881 26.6471 84.7829 26.6333 84.1883 26.9375Z'
            fill='white'
          />
          <path
            d='M165.747 30.2288V33.755H166.162H166.577L166.604 31.183L166.646 28.5971L168.706 31.183C169.84 32.5934 170.85 33.755 170.96 33.755C171.099 33.755 171.14 33.0774 171.14 30.298V26.8409H170.725H170.31V29.413V31.985L169.73 31.2798C169.398 30.9064 168.457 29.7172 167.614 28.6524C166.784 27.5876 166.01 26.7165 165.927 26.7165C165.789 26.7026 165.747 27.4908 165.747 30.2288Z'
            fill='white'
          />
          <path
            d='M180.004 27.0068C179.934 27.1866 179.285 28.7492 178.552 30.4916C177.819 32.2339 177.224 33.6859 177.224 33.6997C177.224 33.7273 177.404 33.755 177.625 33.755C177.985 33.755 178.068 33.672 178.303 33.0221L178.579 32.303H180.211H181.857L182.188 33.0221C182.479 33.6582 182.576 33.755 182.921 33.755H183.309L183.046 33.0913C181.566 29.4406 180.418 26.7718 180.28 26.7303C180.197 26.7026 180.073 26.8271 180.004 27.0068ZM180.93 29.8555C181.248 30.6713 181.511 31.418 181.511 31.5148C181.511 31.6946 179.077 31.7637 178.98 31.5702C178.911 31.4457 180.128 28.362 180.252 28.362C180.294 28.362 180.598 29.0396 180.93 29.8555Z'
            fill='white'
          />
          <path
            d='M190.375 26.9512C189.683 27.2969 189.365 27.8086 189.365 28.5138C189.379 29.3435 189.711 29.7169 191.135 30.4774C192.49 31.1965 192.712 31.4039 192.712 31.9847C192.712 33.0356 191.149 33.4643 190.195 32.6899C189.946 32.4687 189.669 32.2198 189.586 32.0953C189.448 31.9294 189.393 31.9294 189.199 32.0815C188.881 32.3442 188.923 32.5516 189.365 32.9388C190.084 33.6026 190.485 33.7685 191.329 33.7685C192.739 33.7823 193.68 32.8697 193.486 31.6943C193.362 30.9476 193.016 30.588 191.688 29.8828C190.319 29.1361 190.015 28.818 190.153 28.2372C190.333 27.3799 191.771 27.1586 192.463 27.8777C192.836 28.2787 193.03 28.3064 193.265 28.016C193.5 27.7394 193.14 27.3108 192.366 26.9651C191.661 26.647 190.983 26.6332 190.375 26.9512Z'
            fill='white'
          />
          <path
            d='M207.37 30.2288V33.755H207.715H208.061L208.089 31.1691L208.13 28.5694L209.029 29.6895C209.527 30.298 210.453 31.4595 211.103 32.2754C211.753 33.0774 212.362 33.7412 212.458 33.755C212.583 33.755 212.624 32.9806 212.624 30.298V26.8409H212.279H211.933V29.33C211.933 30.699 211.878 31.8191 211.808 31.8191C211.712 31.8191 209.444 29.1087 207.992 27.2419C207.771 26.9515 207.536 26.7165 207.48 26.7026C207.411 26.7026 207.37 28.2929 207.37 30.2288Z'
            fill='white'
          />
          <path
            d='M0.0984554 27.145C0.181425 27.3247 0.706896 28.2097 1.24619 29.1224L2.228 30.7818L2.25565 32.2337C2.28331 33.6857 2.28331 33.6857 2.62901 33.7272L2.98855 33.7687V32.3305V30.8786L4.0948 28.9703C4.70324 27.9194 5.20106 27.0067 5.20106 26.9376C5.20106 26.8684 5.03512 26.8408 4.8277 26.8684C4.49582 26.9099 4.31605 27.145 3.5555 28.4725C3.05769 29.316 2.61519 29.9798 2.55987 29.9244C2.50456 29.8553 2.08971 29.1639 1.63338 28.3619C0.886662 27.0343 0.776037 26.9099 0.375019 26.8684C-0.0536547 26.8269 -0.0674828 26.8408 0.0984554 27.145Z'
            fill='white'
          />
          <path
            d='M16.7895 29.3576C16.831 31.6393 16.8587 31.9435 17.1352 32.5105C17.5639 33.3816 18.2553 33.755 19.4584 33.755C20.2604 33.755 20.4402 33.6997 20.9518 33.3263C21.9336 32.6211 22.0719 32.1509 22.0719 29.2885V26.8409H21.7262C21.4635 26.8409 21.3805 26.9101 21.3805 27.1451C21.339 30.7128 21.2837 31.7914 21.1039 32.1371C20.6753 33.0221 19.2786 33.3402 18.3659 32.787C17.6192 32.3307 17.5086 31.8605 17.5086 29.1917V26.8409H17.1352H16.748L16.7895 29.3576Z'
            fill='white'
          />
          <path
            d='M25.1143 30.298V33.755H25.46H25.8057V32.303V30.8511H26.6077L27.3959 30.8649L28.433 32.303C29.318 33.5338 29.5255 33.755 29.8573 33.755C30.0647 33.755 30.2307 33.7273 30.2307 33.672C30.2307 33.6029 29.8297 33.0083 28.7096 31.418L28.2809 30.8234L28.834 30.3394C29.4701 29.8001 29.7052 29.164 29.5393 28.4312C29.2489 27.159 28.6543 26.8409 26.5662 26.8409H25.1143V30.298ZM28.3362 27.8089C28.5436 27.9748 28.7372 28.2929 28.7787 28.5418C28.9862 29.6342 28.2394 30.2012 26.7322 30.132L25.8748 30.0905L25.8333 28.9981C25.8057 28.3897 25.8195 27.8227 25.861 27.7121C25.9163 27.5876 26.2343 27.5323 26.9534 27.5323C27.7831 27.5323 28.0458 27.5876 28.3362 27.8089Z'
            fill='white'
          />
          <path
            d='M45.3027 30.298V33.755H47.3078H49.3129V33.4093V33.0636H47.7227H46.1324V29.9523V26.8409H45.7176H45.3027V30.298Z'
            fill='white'
          />
          <path
            d='M59.8228 27.1866C59.8228 27.5323 59.8366 27.5323 60.9981 27.5323H62.1735V30.6437V33.755H62.5884H63.0032V30.6437V27.5323H64.1786C65.3402 27.5323 65.354 27.5323 65.354 27.1866V26.8409H62.5884H59.8228V27.1866Z'
            fill='white'
          />
          <path
            d='M67.7046 30.298V33.755H68.1194H68.5343V32.0265V30.298H70.4011H72.2679V32.0265V33.755H72.6827H73.0976V30.298V26.8409H72.6827H72.2679V28.2929V29.7448H70.4011H68.5343V28.2929V26.8409H68.1194H67.7046V30.298Z'
            fill='white'
          />
          <path
            d='M76.2788 30.298V33.755H78.4222H80.5655V33.4093V33.0636H78.7679H76.9564L76.9979 31.7084L77.0394 30.3671L78.3945 30.3256C79.6114 30.298 79.7359 30.2703 79.7359 30.0214C79.7359 29.7725 79.6114 29.7448 78.3945 29.7172L77.0394 29.6757L76.9979 28.5971L76.9564 27.5323H78.6987H80.4273V27.1866V26.8409H78.353H76.2788V30.298Z'
            fill='white'
          />
          <path
            d='M94.2549 30.2841V33.755H95.3611C96.8269 33.755 97.7258 33.5476 98.5001 33.0221C99.4266 32.386 99.8276 31.5287 99.8276 30.2426C99.8138 29.1226 99.5373 28.4173 98.8597 27.7951C98.0853 27.076 97.6151 26.9239 95.8866 26.8686L94.2549 26.8133V30.2841ZM97.5736 27.8365C98.4172 28.279 98.9426 28.9843 99.0394 29.8278C99.2883 31.8467 97.8502 33.2019 95.61 33.0359L95.0154 32.9945L94.9739 30.4501C94.9463 29.0534 94.9601 27.8227 95.0016 27.7259C95.1261 27.394 96.8546 27.477 97.5736 27.8365Z'
            fill='white'
          />
          <path
            d='M102.552 30.298V33.755H104.764H106.977V33.4093V33.0774L105.151 33.0359L103.312 32.9945V31.6808V30.3671L104.667 30.3256C105.884 30.298 106.009 30.2703 106.009 30.0214C106.009 29.7725 105.884 29.7448 104.667 29.7172L103.312 29.6757V28.6386V27.6015L105.082 27.56L106.838 27.5185V27.1866V26.8409H104.695H102.552V30.298Z'
            fill='white'
          />
          <path
            d='M109.604 30.298V33.755H111.54H113.476V33.4093C113.476 33.0774 113.476 33.0774 111.927 33.0359L110.365 32.9945L110.323 29.9108L110.295 26.8409H109.95H109.604V30.298Z'
            fill='white'
          />
          <path
            d='M115.965 30.3116V33.7687L116.311 33.7272C116.505 33.6995 116.657 33.6442 116.657 33.5751C116.657 33.5198 116.657 31.9848 116.657 30.1595V26.8408H116.311H115.965V30.3116Z'
            fill='white'
          />
          <path
            d='M119.325 27.0067C119.353 27.1035 120.003 28.666 120.75 30.4775C121.704 32.7592 122.174 33.7548 122.312 33.7272C122.423 33.6995 122.838 32.8698 123.253 31.888C123.667 30.8924 124.304 29.3575 124.677 28.4586L125.341 26.8407H124.912H124.469L123.432 29.4681C122.865 30.9062 122.368 32.0954 122.326 32.0954C122.271 32.0954 121.967 31.4317 121.635 30.602C120.072 26.7439 120.127 26.8407 119.671 26.8407C119.395 26.8407 119.27 26.896 119.325 27.0067Z'
            fill='white'
          />
          <path
            d='M127.857 30.298V33.755H130.07H132.282V33.4093V33.0774L130.457 33.0359L128.618 32.9945V31.6808V30.3671L129.973 30.3256C131.19 30.298 131.314 30.2703 131.314 30.0214C131.314 29.7725 131.19 29.7448 129.973 29.7172L128.618 29.6757V28.6386V27.6015L130.388 27.56L132.144 27.5185V27.1866V26.8409H130.001H127.857V30.298Z'
            fill='white'
          />
          <path
            d='M134.91 30.298V33.755H135.256H135.602V32.303V30.8511L136.404 30.8649H137.192L138.201 32.3169C139.1 33.5891 139.266 33.755 139.626 33.755C139.847 33.755 140.027 33.7273 140.027 33.6997C140.027 33.6582 139.598 33.0221 139.059 32.2616C138.533 31.5148 138.091 30.8373 138.091 30.7681C138.091 30.699 138.229 30.5745 138.395 30.5054C139.252 30.1182 139.612 28.6386 139.059 27.7397C138.616 27.0207 138.063 26.8409 136.376 26.8409H134.91V30.298ZM138.16 27.8089C138.478 28.1269 138.616 28.7907 138.478 29.3023C138.312 29.8969 137.717 30.1597 136.5 30.1597H135.602V28.8322V27.5047L136.777 27.5461C137.593 27.5876 138.008 27.6706 138.16 27.8089Z'
            fill='white'
          />
          <path
            d='M142.501 26.8962C142.473 26.9239 142.46 28.4865 142.487 30.3533L142.529 33.755H144.658H146.802V33.4093V33.0636H145.004H143.192L143.234 31.7084L143.275 30.3671L144.631 30.3256C145.847 30.298 145.972 30.2703 145.972 30.0214C145.972 29.7725 145.847 29.7448 144.631 29.7172L143.275 29.6757L143.234 28.5971L143.192 27.5323H145.004H146.802V27.1866V26.8409H144.686C143.511 26.8409 142.529 26.8686 142.501 26.8962Z'
            fill='white'
          />
          <path
            d='M149.429 30.3115V33.7962L150.992 33.7271C152.167 33.6856 152.693 33.6026 153.163 33.3814C155.901 32.1368 155.707 28.0437 152.872 27.048C152.513 26.9098 151.766 26.8406 150.867 26.8406H149.429V30.3115ZM152.651 27.7256C153.315 27.9745 153.674 28.2926 154.006 28.9425C154.297 29.5233 154.352 30.7402 154.117 31.3624C153.73 32.3996 152.513 33.0633 150.992 33.0633H150.259V30.2977V27.532H151.199C151.711 27.5459 152.361 27.6288 152.651 27.7256Z'
            fill='white'
          />
          <path
            d='M161.875 30.298V33.755H162.289H162.704V30.298V26.8409H162.289H161.875V30.298Z'
            fill='white'
          />
          <path
            d='M196.307 30.298V33.755H196.722H197.137V32.3169V30.8787L198.285 30.8373C199.253 30.7958 199.529 30.7266 199.999 30.4086C201.285 29.5651 201.036 27.5323 199.584 26.993C199.363 26.9101 198.547 26.8409 197.745 26.8409H196.307V30.298ZM199.64 27.9333C200.151 28.4588 200.179 29.1502 199.709 29.7033C199.405 30.0491 199.28 30.0905 198.257 30.132L197.137 30.1873V28.8598V27.5323H198.188C199.156 27.5323 199.266 27.56 199.64 27.9333Z'
            fill='white'
          />
          <path
            d='M203.497 30.298V33.755H203.843H204.188V30.298V26.8409H203.843H203.497V30.298Z'
            fill='white'
          />
        </svg>
      </Link>
    </Center>
  );
};

export default Logo;
