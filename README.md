# 🌿 Encanto no Paraíso — Site Redesenhado

Redesign completo do site, elevando ao padrão de hospedagem premium (estilo Airbnb / eco-resort de luxo).

---

## 📁 Estrutura de Arquivos

```
/
├── index.html          ← Página inicial (Hero + Sobre + Diferenciais + Depoimentos + CTA)
├── cabanas.html        ← Página da cabana (Slideshow + Amenidades + Experiência)
├── reserve.html        ← Página de reserva (Airbnb + Contatos)
├── sobrenos.html       ← Sobre nós (História + Valores + Localização)
├── turismos.html       ← Turismo na região (Cards de atrações + Roteiro)
│
├── css/
│   └── styles.css      ← Sistema de design global (ÚNICO arquivo CSS para tudo)
│
├── js/
│   └── main.js         ← JavaScript global (Header, Animações, Slideshow, Scroll)
│
└── IMG/                ← Pasta com todas as imagens originais (não alteradas)
```

---

## 🎨 Sistema de Design

### Paleta de Cores
| Token          | Valor     | Uso                           |
|----------------|-----------|-------------------------------|
| `--green-dark` | `#1F3D2B` | Headers, botões, fundo footer |
| `--green-mid`  | `#3E6B4F` | Hover, links, detalhes        |
| `--cream`      | `#F5F1E9` | Fundos suaves, cards          |
| `--earth`      | `#8B5E3C` | Labels, eyebrows              |
| `--gold`       | `#C9A96E` | Destaque, CTAs, divisores     |
| `--white`      | `#FAFAFA` | Fundo base                    |

### Tipografia
- **Display**: Playfair Display (serif) — Títulos e headings
- **Body**: DM Sans (sans-serif) — Textos e UI

---

## ✅ O que foi feito

### 🔧 Problemas Corrigidos
- ❌ CSS fragmentado em 5+ arquivos → ✅ Sistema de design unificado em 1 arquivo
- ❌ Header sem scroll behavior → ✅ Header com glassmorphism ao rolar
- ❌ Sem animações → ✅ Scroll reveal suave em todos os elementos
- ❌ Botões genéricos → ✅ Sistema de botões consistente com hover effects
- ❌ Imagens sem enquadramento → ✅ Border-radius, sombras, overlay e zoom no hover
- ❌ Footer duplicado em cada página → ✅ Footer consistente e profissional
- ❌ Tipografia sem hierarquia → ✅ Escala tipográfica clara e elegante
- ❌ Sem mobile menu → ✅ Hamburger menu funcional
- ❌ Slideshow sem transição → ✅ Slideshow com fade suave e autoplay

### 🆕 Seções Adicionadas
- **Hero** com badges de credibilidade e dois CTAs
- **Depoimentos** de hóspedes (seção de prova social)
- **Distâncias** formatadas (cards visuais)
- **Experiências** da cabana (cards descritivos)
- **Roteiro de turismo** completo
- **CTA Section** em todas as páginas
- **Página de Reserva** redesenhada com botão Airbnb premium

---

## 🚀 Como Usar

1. **Copie** todos os arquivos para o servidor mantendo a estrutura
2. **Mantenha** a pasta `IMG/` com todas as imagens originais
3. **Atualize** os links `.php` → `.html` se necessário (ou o contrário)
4. Os arquivos `fadein.js` e `fotos.js` originais **não são mais necessários** — `js/main.js` substitui ambos

---

## 📱 Responsividade

- ✅ Desktop (1180px+)
- ✅ Tablet (768px – 1024px)
- ✅ Mobile (até 480px)
- ✅ Menu hamburger para mobile
- ✅ Grids adaptáveis com CSS Grid + auto-fit

---

© 2025 Encanto no Paraíso · Desenvolvido por Kelvin Adam Arcari
