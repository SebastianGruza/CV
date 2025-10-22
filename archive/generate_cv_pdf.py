#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CV PDF Generator - Sebastian Gruza
Generates a professional PDF CV from markdown content with Polish characters support
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.lib.colors import HexColor, black, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Kolory firmowe (profesjonalne)
COLOR_PRIMARY = HexColor('#2C3E50')  # Ciemnoniebieski
COLOR_SECONDARY = HexColor('#3498DB')  # Niebieski
COLOR_ACCENT = HexColor('#E74C3C')  # Czerwony akcent
COLOR_TEXT = HexColor('#2C3E50')
COLOR_LIGHT_GRAY = HexColor('#ECF0F1')
COLOR_DARK_GRAY = HexColor('#7F8C8D')

def setup_fonts():
    """Konfiguruje czcionki z polskimi znakami z systemowych czcionek DejaVu"""

    # Ścieżki do systemowych czcionek DejaVu (wspierają polskie znaki)
    system_fonts = {
        'DejaVuSans': '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
        'DejaVuSans-Bold': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
        'DejaVuSans-Oblique': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf',
        'DejaVuSans-BoldOblique': '/usr/share/fonts/truetype/dejavu/DejaVuSans-BoldOblique.ttf',
    }

    for font_name, font_path in system_fonts.items():
        if os.path.exists(font_path):
            try:
                pdfmetrics.registerFont(TTFont(font_name, font_path))
                print(f"✓ Zarejestrowano {font_name}")
            except Exception as e:
                print(f"✗ Błąd rejestracji {font_name}: {e}")
        else:
            print(f"✗ Brak czcionki: {font_path}")

    # Zarejestruj rodzinę czcionek
    try:
        pdfmetrics.registerFontFamily(
            'DejaVuSans',
            normal='DejaVuSans',
            bold='DejaVuSans-Bold',
            italic='DejaVuSans',
            boldItalic='DejaVuSans-Bold'
        )
        print("✓ Rodzina czcionek DejaVuSans zarejestrowana\n")
    except Exception as e:
        print(f"✗ Błąd rejestracji rodziny czcionek: {e}\n")

def create_cv_pdf():
    """Tworzy profesjonalne CV w PDF"""

    # Konfiguruj czcionki z polskimi znakami
    setup_fonts()

    # Ustawienia dokumentu
    pdf_filename = "Sebastian_Gruza_CV_Graph_Database_Engineer.pdf"
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        rightMargin=2*cm,
        leftMargin=2*cm,
        topMargin=1.5*cm,
        bottomMargin=1.5*cm
    )

    # Style
    styles = getSampleStyleSheet()

    # Custom styles z czcionkami DejaVu (polskie znaki)
    style_name = ParagraphStyle(
        'CustomName',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=COLOR_PRIMARY,
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='DejaVuSans-Bold'
    )

    style_title = ParagraphStyle(
        'CustomTitle',
        parent=styles['Normal'],
        fontSize=14,
        textColor=COLOR_SECONDARY,
        spaceAfter=20,
        alignment=TA_CENTER,
        fontName='DejaVuSans'
    )

    style_section_header = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=white,
        spaceAfter=12,
        spaceBefore=16,
        fontName='DejaVuSans-Bold',
        backColor=COLOR_PRIMARY,
        leftIndent=10,
        rightIndent=10,
        borderPadding=8
    )

    style_subsection = ParagraphStyle(
        'Subsection',
        parent=styles['Heading3'],
        fontSize=12,
        textColor=COLOR_PRIMARY,
        spaceAfter=6,
        spaceBefore=8,
        fontName='DejaVuSans-Bold'
    )

    style_body = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=10,
        textColor=COLOR_TEXT,
        spaceAfter=6,
        alignment=TA_JUSTIFY,
        fontName='DejaVuSans'
    )

    style_bullet = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontSize=10,
        textColor=COLOR_TEXT,
        spaceAfter=4,
        leftIndent=15,
        bulletIndent=5,
        fontName='DejaVuSans'
    )

    style_contact = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontSize=9,
        textColor=COLOR_DARK_GRAY,
        alignment=TA_CENTER,
        spaceAfter=4,
        fontName='DejaVuSans'
    )

    # Elementy CV
    story = []

    # === HEADER Z ZDJĘCIEM ===
    photo_path = "SebastianGruza.jpg"
    if os.path.exists(photo_path):
        # Tabela: zdjęcie + dane kontaktowe
        photo = Image(photo_path, width=3*cm, height=3*cm)

        # Dane kontaktowe (prawo od zdjęcia)
        contact_data = [
            [photo, [
                Paragraph("<b>SEBASTIAN GRUZA</b>", style_name),
                Paragraph("Graph Database Engineer | Neo4j Expert | Java Backend Developer", style_title),
                Spacer(1, 3*mm),
                Paragraph("📧 [twój email] | 📱 [twój telefon]", style_contact),
                Paragraph("🔗 LinkedIn: [twój LinkedIn] | GitHub: github.com/SebastianGruza", style_contact),
                Paragraph("📍 Warszawa, Polska | 🏠 100% Remote", style_contact),
            ]]
        ]

        header_table = Table(contact_data, colWidths=[3.5*cm, 14*cm])
        header_table.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('ALIGN', (0, 0), (0, 0), 'CENTER'),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ]))
        story.append(header_table)
    else:
        # Bez zdjęcia
        story.append(Paragraph("SEBASTIAN GRUZA", style_name))
        story.append(Paragraph("Graph Database Engineer | Neo4j Expert | Java Backend Developer", style_title))

    story.append(Spacer(1, 5*mm))

    # === PROFIL ZAWODOWY ===
    story.append(Paragraph("🎯 PROFIL ZAWODOWY", style_section_header))
    story.append(Paragraph(
        "<b>Graph Database Engineer z 9-letnim doświadczeniem</b> w projektowaniu i optymalizacji systemów opartych na bazach grafowych (Neo4j), "
        "w tym <b>3+ lata</b> intensywnej pracy z Neo4j i Cypher w środowisku produkcyjnym. Expert w <b>Java</b> i <b>Spring Framework</b> "
        "z udokumentowanym doświadczeniem w budowie skalowalnych algorytmów grafowych dla platformy blockchain analytics. "
        "Magister informatyki (Deep Learning, 5.0) z pasją do optymalizacji wydajności i architektury danych.",
        style_body
    ))
    story.append(Spacer(1, 3*mm))

    # === KLUCZOWE KOMPETENCJE ===
    story.append(Paragraph("💼 KLUCZOWE KOMPETENCJE", style_section_header))

    competencies = [
        "• <b>Neo4j & Cypher:</b> 3+ lata produkcyjnego doświadczenia, graph data modeling, performance tuning",
        "• <b>Java & Spring:</b> 11+ lat komercyjnego doświadczenia, architektura systemów rozproszonych",
        "• <b>Graph Algorithms:</b> Własne implementacje (TSP, VRP-TW), risk propagation (algorytm Proximity)",
        "• <b>Cloud Platforms:</b> AWS (S3, DynamoDB, Iceberg) - aktywna migracja cloud-native (2024-2025)",
        "• <b>Teoria Grafów:</b> 12+ lat doświadczenia (studia → VRP-TW → Neo4j → TspSolver)",
    ]

    for comp in competencies:
        story.append(Paragraph(comp, style_bullet))

    story.append(Spacer(1, 4*mm))

    # === DOŚWIADCZENIE ZAWODOWE ===
    story.append(Paragraph("💼 DOŚWIADCZENIE ZAWODOWE", style_section_header))

    # Lukka/Coinfirm
    story.append(Paragraph("<b>Software Engineer | Lukka (dawniej Coinfirm)</b>", style_subsection))
    story.append(Paragraph("<i>Luty 2024 - obecnie | Warszawa, Polska | 100% zdalnie</i>", style_body))
    story.append(Paragraph(
        "<b>Kontekst:</b> Lukka to rebrandowana Coinfirm - ciągłość zatrudnienia od października 2016 (łącznie 9 lat).",
        style_body
    ))
    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>Aktualne projekty (2024-2025):</b>", style_body))
    lukka_bullets = [
        "• <b>Cloud Migration Lead:</b> Hands-on migracja platformy blockchain analytics na AWS (S3, DynamoDB, Apache Iceberg)",
        "• <b>Data Lakehouse Architecture:</b> Implementacja architektury data lakehouse (Iceberg + S3)",
        "• <b>AI-Powered Development:</b> Wczesna adopcja AI tools (Claude Code) w codziennym programowaniu",
    ]
    for bullet in lukka_bullets:
        story.append(Paragraph(bullet, style_bullet))

    story.append(Spacer(1, 3*mm))

    # Coinfirm - Neo4j era
    story.append(Paragraph("<b>Programmer | Coinfirm</b>", style_subsection))
    story.append(Paragraph("<i>Październik 2016 - Styczeń 2024 (7 lat 4 mies.) | Warszawa, Polska</i>", style_body))
    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>Fase 1 (2016-2019): Neo4j & Graph Databases - Founding Engineer</b>", style_body))
    coinfirm_neo4j = [
        "• <b>Algorytm 'Proximity':</b> Zaprojektowanie i implementacja systemu propagacji ryzyka dla adresów kryptowalutowych (Bitcoin, Ethereum)",
        "• <b>Graph Data Modeling:</b> Projektowanie złożonych modeli grafowych dla analizy transakcji blockchain",
        "• <b>Cypher Query Optimization:</b> Zaawansowane optymalizacje dla grafów o milionach węzłów i relacji",
        "• <b>Performance Tuning:</b> Optymalizacja indeksów, schematów i ścieżek zapytań w Neo4j",
    ]
    for bullet in coinfirm_neo4j:
        story.append(Paragraph(bullet, style_bullet))

    story.append(Spacer(1, 2*mm))
    story.append(Paragraph("<b>Fase 2 (2019-2024): Migracja i skalowanie</b>", style_body))
    coinfirm_migration = [
        "• <b>Architecture Migration:</b> Przeprojektowanie algorytmu Proximity z Neo4j na MaprDB (NoSQL) dla skalowalności",
        "• <b>Migration Strategy:</b> Hands-on implementacja strategii migracji, dual-write, zero-downtime cutover",
    ]
    for bullet in coinfirm_migration:
        story.append(Paragraph(bullet, style_bullet))

    story.append(Spacer(1, 3*mm))

    # Poprzednie stanowiska (skrócone)
    story.append(Paragraph("<b>Młodszy Programista | Atinea Sp. z o.o.</b>", style_subsection))
    story.append(Paragraph("<i>Czerwiec 2015 - Wrzesień 2016 (1 rok 4 mies.) | Warszawa</i>", style_body))
    story.append(Paragraph("• Outsourcing programistyczny: Java EE, .NET, PHP, Oracle PL/SQL, MySQL", style_bullet))
    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>Młodszy Programista | WLOG Solutions</b>", style_subsection))
    story.append(Paragraph("<i>Listopad 2013 - Luty 2014 (4 mies.)</i>", style_body))
    story.append(Paragraph("• <b>Vehicle Routing Problem with Time Windows (VRP-TW)</b> - klasyczny problem optymalizacji grafowej", style_bullet))
    story.append(Spacer(1, 3*mm))

    # === WYKSZTAŁCENIE ===
    story.append(Paragraph("🎓 WYKSZTAŁCENIE", style_section_header))

    story.append(Paragraph("<b>Magister Informatyki | SGGW Warszawa</b>", style_subsection))
    story.append(Paragraph("<i>Październik 2019 - Listopad 2022 | Ocena: 5.0</i>", style_body))
    story.append(Paragraph(
        "Praca magisterska: <i>'Zastosowanie głębokich sieci neuronowych do poprawy materiału nagranego na kasetach VHS'</i> (Deep Learning, Computer Vision)",
        style_bullet
    ))
    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>Licencjat Informatyki i Ekonometrii | SGGW Warszawa</b>", style_subsection))
    story.append(Paragraph("<i>2010 - 2013 | Ocena: 5.0</i>", style_body))
    story.append(Paragraph(
        "<b>Teoria Grafów</b> (kurs): Projekty programistyczne, implementacje dla innych studentów (wsparcie techniczne kolegów)",
        style_bullet
    ))
    story.append(Spacer(1, 3*mm))

    # PAGE BREAK
    story.append(PageBreak())

    # === PROJEKTY OPEN SOURCE ===
    story.append(Paragraph("🏆 PROJEKTY OPEN SOURCE", style_section_header))

    story.append(Paragraph("<b>TspSolver - GPU-Accelerated TSP Solver</b>", style_subsection))
    story.append(Paragraph("<i>GitHub: github.com/SebastianGruza/TspSolver | Status: Production-ready</i>", style_body))
    tsp_bullets = [
        "• <b>50+ benchmark instances</b> z <b>0.0% odchyleniem</b> od optymalnych rozwiązań",
        "• <b>100+ TSP_LIB problems</b> przetestowanych i zwalidowanych",
        "• Skalowalność do <b>9,882 miast</b> (3.57% odchylenie)",
        "• Novel <b>colony-based evolution</b> z adaptive merging + Custom GPU kernel (Aparapi)",
        "• <b>Relevance:</b> Demonstracja głębokiego zrozumienia teorii grafów (TSP = NP-hard, cykle Hamiltona)",
    ]
    for bullet in tsp_bullets:
        story.append(Paragraph(bullet, style_bullet))

    story.append(Spacer(1, 3*mm))

    # === UMIEJĘTNOŚCI TECHNICZNE ===
    story.append(Paragraph("🛠️ UMIEJĘTNOŚCI TECHNICZNE", style_section_header))

    # Tabela umiejętności (3 kolumny)
    skills_data = [
        ["<b>Graph Databases</b>", "<b>Backend Development</b>", "<b>Cloud & Data</b>"],
        [
            "• Neo4j (expert, 3+ lat)<br/>• Cypher optimization<br/>• Graph algorithms<br/>• Theory: TSP, VRP-TW",
            "• Java (11+ lat)<br/>• Spring Framework<br/>• REST APIs<br/>• Distributed systems",
            "• AWS: S3, DynamoDB, Iceberg<br/>• NoSQL: MaprDB<br/>• MySQL, Oracle PL/SQL"
        ],
    ]

    skills_table = Table(skills_data, colWidths=[6*cm, 6*cm, 6*cm])
    skills_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_LIGHT_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), COLOR_PRIMARY),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('TOPPADDING', (0, 1), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_DARK_GRAY),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))

    story.append(skills_table)
    story.append(Spacer(1, 3*mm))

    # === DOPASOWANIE DO WYMAGAŃ ===
    story.append(Paragraph("✅ DOPASOWANIE DO WYMAGAŃ", style_section_header))

    requirements_data = [
        ["<b>Wymaganie</b>", "<b>Moje doświadczenie</b>", "<b>Status</b>"],
        ["8+ lat doświadczenia", "11+ lat Java development", "✅"],
        ["3+ lat Neo4j & Cypher", "3 lata (2016-2019) founding engineer", "✅"],
        ["Strong Java skills", "11+ lat, Spring Framework expert", "✅"],
        ["Solid graph theory", "12+ lat: studia (2010-2013) + VRP-TW + Neo4j + TspSolver", "✅"],
        ["Distributed systems", "9 lat blockchain analytics (miliony transakcji)", "✅"],
        ["Cloud (AWS/Azure/GCP)", "AWS: S3, DynamoDB, Iceberg (aktywna migracja 2024-2025)", "✅"],
        ["Higher education (CS)", "Magister Informatyki (5.0)", "✅"],
        ["MSc degree (nice-to-have)", "Magister Informatyki (5.0)", "✅"],
        ["Research experience", "Praca magisterska: Deep Learning (5.0)", "✅"],
    ]

    requirements_table = Table(requirements_data, colWidths=[6*cm, 8*cm, 2*cm])
    requirements_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('ALIGN', (2, 1), (2, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_DARK_GRAY),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, COLOR_LIGHT_GRAY]),
    ]))

    story.append(requirements_table)
    story.append(Spacer(1, 3*mm))

    # === KLUCZOWE ATUTY ===
    story.append(Paragraph("💡 KLUCZOWE ATUTY", style_section_header))

    story.append(Paragraph("<b>1. Solidne fundamenty Neo4j + Quick Ramp-Up</b>", style_body))
    story.append(Paragraph(
        "3 lata produkcyjnego doświadczenia (2016-2019) - graph data modeling, Cypher optimization, performance tuning. "
        "Neo4j z pewnością ewoluowało od 2019, ale podczas 3-miesięcznego wypowiedzenia planuję odświeżyć wiedzę "
        "(nowe features, aktualne best practices). Fundamenty (graph theory, Cypher, data modeling) pozostają niezmienne.",
        style_bullet
    ))
    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>2. Teoria grafów - 12+ lat kontinuum doświadczenia</b>", style_body))
    kontinuum = [
        "• <b>2010-2013:</b> Kurs 'Teoria Grafów' na studiach + projekty programistyczne",
        "• <b>2013-2014:</b> VRP-TW (pierwsza komercyjna implementacja graph optimization)",
        "• <b>2016-2019:</b> Neo4j production (3 lata)",
        "• <b>Hobby:</b> TspSolver - research-grade solver (0.0% deviation, 50+ instances)",
    ]
    for k in kontinuum:
        story.append(Paragraph(k, style_bullet))

    story.append(Spacer(1, 2*mm))

    story.append(Paragraph("<b>3. Hands-On Migration Experience</b>", style_body))
    story.append(Paragraph(
        "3 major technology migrations w 9 lat (Neo4j → MaprDB → AWS) - rozumiem challenges związane z knowledge transfer i stable technical processes.",
        style_bullet
    ))
    story.append(Spacer(1, 3*mm))

    # === DOSTĘPNOŚĆ ===
    story.append(Paragraph("🚀 DOSTĘPNOŚĆ", style_section_header))
    availability = [
        "• <b>Tryb pracy:</b> 100% remote ✅",
        "• <b>Godziny pracy:</b> 9:00-17:00 CET ✅",
        "• <b>Forma współpracy:</b> B2B contract ✅",
        "• <b>Okres wypowiedzenia:</b> 3 miesiące (obecna praca: niepełny etat B2B)",
        "• <b>Plan na okres wypowiedzenia:</b> Odświeżenie i uzupełnienie wiedzy Neo4j (nowe wersje, features, best practices od 2019)",
    ]
    for av in availability:
        story.append(Paragraph(av, style_bullet))

    story.append(Spacer(1, 5*mm))

    # === KONTAKT ===
    story.append(Paragraph("📞 KONTAKT", style_section_header))
    story.append(Paragraph(
        "<b>Email:</b> [twój email] | <b>Telefon:</b> [twój telefon]<br/>"
        "<b>LinkedIn:</b> [twój LinkedIn] | <b>GitHub:</b> github.com/SebastianGruza",
        style_body
    ))

    # Build PDF
    doc.build(story)
    print(f"✅ CV wygenerowane pomyślnie: {pdf_filename}")
    return pdf_filename

if __name__ == "__main__":
    create_cv_pdf()
