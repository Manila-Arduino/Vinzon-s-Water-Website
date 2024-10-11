from classes.Developer import Developer


class Constants:
    DEVELOPER = Developer.get("Tim")
    FIGMA_KEY = "Pk54m4o0yt3FMU287UWhox"
    TITLE = "Vinzon's Water"

    SVG_TEMP_DIR = "svg_temp/"
    BG_ICON = "bg_icon"

    def SVG_TARGET_DIR(component_name: str):
        return f"components/custom/{component_name}.tsx"
