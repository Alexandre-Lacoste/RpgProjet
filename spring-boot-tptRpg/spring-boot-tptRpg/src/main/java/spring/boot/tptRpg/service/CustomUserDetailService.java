package spring.boot.tptRpg.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import spring.boot.tptRpg.model.Compte;
import spring.boot.tptRpg.repository.ICompteRepository;

//@Service
//public class CustomUserDetailService implements UserDetailsService {
//
//	@Autowired
//	private ICompteRepository compteRepo;
//
//	@Override
//	public UserDetails loadUserByUsername(String pseudo) throws UsernameNotFoundException {
//		Optional <Compte> opt = compteRepo.findBypseudoWithRoles(pseudo);
//
//		if (opt.isPresent()) {
//			return new CustomUserDetails(opt.get());
//		} else {
//			throw new UsernameNotFoundException(pseudo + " Inconnu");
//		}
//	}
//
//}
