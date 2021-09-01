package spring.boot.tptRpg.model;

public class Views {
	public static class ViewCommon{}
	
	public static class Compte extends ViewCommon{}
	public static class ViewUtilisateur extends ViewCommon{}
	public static class ViewUtilisateurDetail extends ViewUtilisateur{}
	
	
	
	public static class ViewPersonnage extends ViewCommon{}
	public static class ViewHero extends ViewPersonnage{}
	public static class ViewHeroDetail extends ViewHero{}

	
	
	public static class ViewMonstre extends ViewPersonnage{}
	public static class ViewMonstreDetail extends ViewMonstre{}
	
	
	public static class ViewObjet extends ViewCommon{}
	public static class ViewArme extends ViewCommon{}
	public static class ViewArmeDetail extends ViewArme{}
	
	public static class ViewArmure extends ViewCommon{}
	public static class ViewArmureDetail extends ViewArmure{}
	
	public static class ViewPotion extends ViewCommon{}
	public static class ViewPotionDetail extends ViewCommon{}

	
	public static class ViewInventaire extends ViewCommon{}
	
	public static class ViewInventaireArme extends ViewCommon{}
	public static class ViewInventaireArmure extends ViewCommon{}
	public static class ViewInventairePotion extends ViewCommon{}
	
	public static class ViewMarchandPotion extends ViewCommon{}
	public static class ViewMarchandArme extends ViewCommon{}
	public static class ViewMarchandArmure extends ViewCommon{}
	public static class ViewMarchand extends ViewCommon{}

	public static class ViewAdmin extends ViewCommon{}

}
